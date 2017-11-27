package com.study.infosecurity.ssoByRoles.contollers;


import com.study.infosecurity.ssoByRoles.model.dto.Motorcycle;
import com.study.infosecurity.ssoByRoles.model.dto.User;
import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode;
import com.study.infosecurity.ssoByRoles.model.poko.constant.Roles;
import com.study.infosecurity.ssoByRoles.model.poko.response.CommonResponse;
import com.study.infosecurity.ssoByRoles.model.poko.response.MotorcycleResponse;
import com.study.infosecurity.ssoByRoles.service.MotorcycleService;
import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
public class MotorcycleController {

    private MotorcycleService motorcycleService;
    private String USER = "user";

    @Autowired
    private HttpServletRequest request;

    @Autowired
    public MotorcycleController(MotorcycleService motorcycleService) {
        this.motorcycleService = motorcycleService;
    }

    @RequestMapping(value = "/motorcycles", method = RequestMethod.GET)
    public CommonResponse getAllMotorcycles() {
        try{
            return new MotorcycleResponse( motorcycleService.findAll());
        }
        catch (Exception ex){
            return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
        }
    }

    @RequestMapping(value = "/addMotorcycle", method = RequestMethod.POST)
    public CommonResponse addMotorcycle(@RequestBody Motorcycle motorcycle) {
        try{
            if(this.hasAccess()){
                motorcycleService.save(motorcycle);
                return new CommonResponse(ResponseCode.SUCCESS, "Motorcycle succesfully added");
            }
            return new CommonResponse(ResponseCode.ERROR, "Access Denied");
        }
        catch (Exception ex){
            return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
        }
    }

    @RequestMapping(value = "/updateMotorcycle", method = RequestMethod.GET)
    public CommonResponse updateMotorcycle(@RequestBody Motorcycle motorcycle) {
        try{
            if (motorcycleService.exists(motorcycle.getId()) && hasAccess()){
                motorcycleService.save(motorcycle);
                return new CommonResponse(ResponseCode.SUCCESS, "Motorcycle succesfully udated");
            }
            return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
        }
        catch (Exception ex){
            return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
        }
    }

    @RequestMapping(value = "/deleteMotorcycle", method = RequestMethod.GET)
    public CommonResponse deleteMotorcycle(@RequestParam String id) {
        try{
            if(this.hasAccess()){
                motorcycleService.deleteById(Long.parseLong(id));
                return new CommonResponse(ResponseCode.SUCCESS, "Motorcycle succesfully deleted");
            }
            return new CommonResponse(ResponseCode.ERROR, "Access Denied");
        }
        catch (Exception ex){
            return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
        }
    }

    private boolean hasAccess(){
        User user = (User) this.request.getAttribute(USER);
        Roles item = user.getRoles().stream()
                .filter(e -> e.equals(Roles.MOTORCYCLE_WRITE))
                .findFirst()
                .orElse(null);
        return item != null;
    }
}