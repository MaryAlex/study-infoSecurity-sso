package com.study.infosecurity.ssoByRoles.interceptor;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode;
import com.study.infosecurity.ssoByRoles.model.poko.response.CommonResponse;
import com.study.infosecurity.ssoByRoles.model.poko.response.ValidationResponse;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class SecurityInterceptor implements HandlerInterceptor {
    private String TOKEN = "token";
    private String USER_ATTRIBUTE = "user";
    private String AUTH_SERVICE = "http://localhost:9000/";
    private String AUTH_SERVICE_VALIDATION = this.AUTH_SERVICE + "validation?" + this.TOKEN + "=";

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        ValidationResponse validationResponse = this.getValidationResponse(request);
        return this.handleValidationResponse(validationResponse, request, response);
    }

    private ValidationResponse getValidationResponse(HttpServletRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        String token = request.getHeader(this.TOKEN);
        return restTemplate.getForObject(this.AUTH_SERVICE_VALIDATION + token, ValidationResponse.class);
    }

    private boolean handleValidationResponse(ValidationResponse validationResponse, HttpServletRequest request,
                                             HttpServletResponse response) throws IOException {
        if (validationResponse == null) {
            this.writeToResponse(response,
                    new CommonResponse(ResponseCode.AUTHENTICATION_FAIL_ERROR, "Some problem with your token"));
            return false;
        }
        if (validationResponse.getResponseCode() == ResponseCode.AUTHENTICATION_FAIL_ERROR) {
            this.writeToResponse(response, validationResponse);
            return false;
        }
        request.setAttribute(USER_ATTRIBUTE, validationResponse.getUser());
        return true;
    }

    private void writeToResponse(HttpServletResponse response, CommonResponse what) throws IOException {
        new ObjectMapper().writeValue(response.getWriter(), what);
    }
}