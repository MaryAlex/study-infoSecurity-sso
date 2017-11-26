package com.study.infosecurity.ssoByRoles.contollers;

import com.study.infosecurity.ssoByRoles.model.dto.Computer;
import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode;
import com.study.infosecurity.ssoByRoles.model.poko.response.CommonResponse;
import com.study.infosecurity.ssoByRoles.model.poko.response.ComputerResponse;
import com.study.infosecurity.ssoByRoles.service.ComputerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class ComputerController {

    private ComputerService computerService;

    @Autowired
    public ComputerController(ComputerService computerService) {
        this.computerService = computerService;
    }


    @RequestMapping(value = "/computers", method = RequestMethod.GET)
    public CommonResponse getAllComputers() {
        try{
            return new ComputerResponse(computerService.findAll());
        }
        catch (Exception ex){
            return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
        }
    }

    @RequestMapping(value = "/addComputer", method = RequestMethod.POST)
    public CommonResponse addComputer(@RequestBody Computer computer) {
        try{
            computerService.save(computer);
            return new CommonResponse(ResponseCode.SUCCESS, "Computer succesfully added");
        }
        catch (Exception ex){
            return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
        }
    }

    @RequestMapping(value = "/updateComputer", method = RequestMethod.GET)
    public CommonResponse updateComputer(@RequestBody Computer computer) {
        try{
            if (computerService.exists(computer.getId())){
                computerService.save(computer);
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
            computerService.deleteById(Long.parseLong(id));
            return new CommonResponse(ResponseCode.SUCCESS, "Computer succesfully deleted");
        }
        catch (Exception ex){
            return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
        }
    }
}
