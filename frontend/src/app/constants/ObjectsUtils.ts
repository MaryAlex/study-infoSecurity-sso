import { ObjectTypes } from '@src/types/types';
import ObjectNames = SSOByRolesDefinitions.ObjectNames;
import Computer = SSOByRolesDefinitions.Computer;
import Flat = SSOByRolesDefinitions.Flat;
import Motorcycle = SSOByRolesDefinitions.Motorcycle;
import * as React from 'react';
import { ID_KEY, TYPE_KEY } from '@src/app/constants/Constants';

export class ComputerClass implements Computer {
    constructor(public id: number = undefined, public firm: string = undefined, public model: string = undefined,
                public battery: string = undefined, public processor: string = undefined,
                public type: SSOByRolesDefinitions.Type = undefined) {
    }
}

export class FlatClass implements Flat {
    constructor(public id: number = undefined, public numbersOfRoom: number = undefined, public square: number = undefined,
                public description: string = undefined, public type: SSOByRolesDefinitions.Type = undefined) {
    }
}

export class MotorcycleClass implements Motorcycle {
    constructor(public id: number = undefined, public firm: string = undefined, public model: string = undefined,
                public width: number = undefined, public height: number = undefined, public displacement: string = undefined,
                public type: SSOByRolesDefinitions.Type = undefined) {
    }
}

export const getForEachHandlerNodeType = (action: (key: string) => React.ReactNode, object?: any): (previousValue: React.ReactNode[], key: string) => React.ReactNode[] =>
    (previousValue: React.ReactNode[], key: string) => {
        if (key === ID_KEY || key === TYPE_KEY) {
            return previousValue;
        }
        return [...previousValue, object ? action(object[key]) : action(key)];
    }

export const newObjectTypes = (type: ObjectNames): ObjectTypes => {
    switch (type) {
        case ObjectNames.COMPUTER:
            return new ComputerClass();
        case  ObjectNames.FLAT:
            return new FlatClass();
        case  ObjectNames.MOTORCYCLE:
            return new MotorcycleClass();
    }
}