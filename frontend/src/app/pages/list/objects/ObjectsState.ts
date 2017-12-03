import * as _ from 'lodash'
import { ObjectTypes } from '@src/types/types';

export class ObjectsState {
    constructor(public objects: ObjectTypes[] = [], public isEditModeFor: string = '', public isCreateMode: boolean = false) {

    }

    removeObject = (objects: ObjectTypes[], object: ObjectTypes) => ({ objects: _.without(objects, object) })
    updateObject = (oldObjects: ObjectTypes[], object: ObjectTypes) => {
        const index = _.findIndex(oldObjects, (obj: ObjectTypes) => obj.id === object.id);
        const objects = _.clone(oldObjects);
        objects[index] = object;
        return { objects }
    }
    addObject = (oldObjects: ObjectTypes[], object: ObjectTypes) => {
        const objects = [...oldObjects, object];
        return { objects }
    }

    setEditStateFor = (isEditModeFor: string) => ({ isEditModeFor })
    setCreateMode = (isCreateMode: boolean) => ({ isCreateMode })
}