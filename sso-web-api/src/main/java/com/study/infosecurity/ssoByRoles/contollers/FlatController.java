package com.study.infosecurity.ssoByRoles.contollers;


import com.study.infosecurity.ssoByRoles.model.dto.Flat;
import com.study.infosecurity.ssoByRoles.model.poko.constant.ResponseCode;
import com.study.infosecurity.ssoByRoles.model.poko.response.CommonResponse;
import com.study.infosecurity.ssoByRoles.model.poko.response.FlatResponse;
import com.study.infosecurity.ssoByRoles.service.FlatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
public class FlatController {

    private FlatService flatService;

    @Autowired
    public FlatController(FlatService flatService) {
        this.flatService = flatService;
    }

    @RequestMapping(value = "/flats", method = RequestMethod.GET)
    public CommonResponse getAllFlats() {
        try{
            return new FlatResponse(flatService.findAll());
        }
        catch (Exception ex){
            return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
        }
    }

    @RequestMapping(value = "/addFlat", method = RequestMethod.POST)
    public CommonResponse addFlat(@RequestBody Flat flat) {
        try{
            flatService.save(flat);
            return new CommonResponse(ResponseCode.SUCCESS, "Flat succesfully added");
        }
        catch (Exception ex){
            return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
        }
    }

    @RequestMapping(value = "/updateFlat", method = RequestMethod.GET)
    public CommonResponse updateFlat(@RequestBody Flat flat) {
        try{
            if (flatService.exists(flat.getId())){
                flatService.save(flat);
                return new CommonResponse(ResponseCode.SUCCESS, "Flat succesfully udated");
            }
            return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
        }
        catch (Exception ex){
            return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
        }
    }

    @RequestMapping(value = "/deleteFlat", method = RequestMethod.GET)
    public CommonResponse deleteFlat(@RequestParam String id) {
        try{
            flatService.deleteById(Long.parseLong(id));
            return new CommonResponse(ResponseCode.SUCCESS, "Flat succesfully deleted");
        }
        catch (Exception ex){
            return new CommonResponse(ResponseCode.ERROR, "Some Error =(");
        }
    }

}
