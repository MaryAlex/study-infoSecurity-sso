package com.study.infosecurity.ssoByRoles.contollers;

import com.study.infosecurity.ssoByRoles.model.dto.Computer;
import com.study.infosecurity.ssoByRoles.model.dto.User;
import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode;
import com.study.infosecurity.ssoByRoles.model.poko.constant.Roles;
import com.study.infosecurity.ssoByRoles.model.poko.response.CommonResponse;
import com.study.infosecurity.ssoByRoles.model.poko.response.ComputerResponse;
import com.study.infosecurity.ssoByRoles.service.ComputerService;
import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class ComputerController {

    private ComputerService computerService;
    private String USER = "user";

    @Autowired
    private HttpServletRequest request;


    @Autowired
    public ComputerController(ComputerService computerService) {
        this.computerService = computerService;
    }


    @RequestMapping(value = "/computers", method = RequestMethod.GET)
    public CommonResponse getAllComputers() {
        try{
            return new ComputerResponse(this.computerService.findAll());
        }
        catch (Exception ex){
            return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
        }
    }

    @RequestMapping(value = "/addComputer", method = RequestMethod.POST)
    public CommonResponse addComputer(@RequestBody Computer computer) {
        try{
            if(this.hasAccess()){
                this.computerService.save(computer);
                return new CommonResponse(ResponseCode.SUCCESS, "Computer succesfully added");
            }
            return new CommonResponse(ResponseCode.ERROR, "Access Denied");
        }
        catch (Exception ex){
            return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
        }
    }

    @RequestMapping(value = "/updateComputer", method = RequestMethod.GET)
    public CommonResponse updateComputer(@RequestBody Computer computer) {
        try{
            if (this.computerService.exists(computer.getId()) && this.hasAccess()){
                this.computerService.save(computer);
                return new CommonResponse(ResponseCode.SUCCESS, "Computer succesfully udated");
            }
            return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
        }
        catch (Exception ex){
            return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
        }
    }

    @RequestMapping(value = "/deleteComputer", method = RequestMethod.GET)
    public CommonResponse deleteComputer(@RequestParam String id) {
        try{
            if(this.hasAccess()){
                this.computerService.deleteById(Long.parseLong(id));
                return new CommonResponse(ResponseCode.SUCCESS, "Computer succesfully deleted");
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
                .filter(e -> e.equals(Roles.COMPUTER_WRITE))
                .findFirst()
                .orElse(null);
        return item != null;
    }
}