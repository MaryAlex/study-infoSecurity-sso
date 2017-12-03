import { HttpRequestService, HttpResponse } from '@src/app/services/HttpRequestService';
import GetAllResponse = SSOByRolesDefinitions.GetAllResponse;
import ObjectNames = SSOByRolesDefinitions.ObjectNames;
import CommonResponse = SSOByRolesDefinitions.CommonResponse;
import { Endpoints, ObjectEndpoints } from '@src/app/constants/Endpoints';
import { ObjectTypes } from '@src/types/types';

export class ObjectsService {
    private static typeToUrl = new Map<ObjectNames, ObjectEndpoints>([
        [ObjectNames.COMPUTER, Endpoints.computers],
        [ObjectNames.FLAT, Endpoints.flats],
        [ObjectNames.MOTORCYCLE, Endpoints.motorcycles]]);

    static getAll = (type: ObjectNames): HttpResponse<GetAllResponse<ObjectTypes>> =>
        HttpRequestService.get(ObjectsService.typeToUrl.get(type).getAll)

    static deleteObject = (type: ObjectNames, object: ObjectTypes): HttpResponse<CommonResponse> =>
        HttpRequestService.post(ObjectsService.typeToUrl.get(type).deleteObj, object)

    static update = (type: ObjectNames, object: ObjectTypes): HttpResponse<CommonResponse> =>
        HttpRequestService.post(ObjectsService.typeToUrl.get(type).update, object)

    static add = (type: ObjectNames, object: ObjectTypes): HttpResponse<CommonResponse> =>
        HttpRequestService.post(ObjectsService.typeToUrl.get(type).add, object)

    static getTypes = (objectName: ObjectNames): HttpResponse<CommonResponse> =>
        HttpRequestService.get(Endpoints.types.getByObjectName, { objectName })
}
