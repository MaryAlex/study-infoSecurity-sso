package com.study.infosecurity.ssoByRoles.interceptor;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode;
import com.study.infosecurity.ssoByRoles.model.poko.response.ValidationResponse;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SecurityInterceptor implements HandlerInterceptor {
    private String TOKEN = "token";
    private String USER = "user";
    private String AUTH_SERVICE = "http://localhost:9000/";
    private String AUTH_SERVICE_VALIDATION = this.AUTH_SERVICE + "validation?" + this.TOKEN + "=";

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        RestTemplate restTemplate = new RestTemplate();
        String token = request.getHeader(this.TOKEN);
        ValidationResponse validationResponse = restTemplate.getForObject(this.AUTH_SERVICE_VALIDATION + token, ValidationResponse.class);
        if (validationResponse != null && validationResponse.getResponseCode() == ResponseCode.ERROR) {
            new ObjectMapper().writeValue(response.getWriter(), validationResponse);
            return false;
        }

        request.setAttribute(USER, validationResponse.getUser());
        return true;
    }
}