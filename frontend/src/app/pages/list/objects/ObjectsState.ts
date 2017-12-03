import * as _ from 'lodash';
import { ObjectTypes } from '@src/types/types';
import Type = SSOByRolesDefinitions.Type;

export class ObjectsState {
    constructor(public objects: ObjectTypes[] = [], public isEditModeFor: string = '', public isCreateMode: boolean = false,
                public types: Type[] = []) {

    }

    removeObject = (objects: ObjectTypes[], object: ObjectTypes) => ({ objects: _.without(objects, object) });
    updateObject = (oldObjects: ObjectTypes[], object: ObjectTypes) => {
        const index = _.findIndex(oldObjects, (obj: ObjectTypes) => obj.id === object.id);
        const objects = _.clone(oldObjects);
        objects[index] = object;
        return { objects };
    }
    addObject = (oldObjects: ObjectTypes[], object: ObjectTypes) => {
        const objects = [...oldObjects, object];
        return { objects };
    }

    setTypes = (types: Type[]) => ({ types });
    setEditStateFor = (isEditModeFor: string) => ({ isEditModeFor });
    setCreateMode = (isCreateMode: boolean) => ({ isCreateMode });
}
