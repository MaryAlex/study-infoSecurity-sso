import Computer = SSOByRolesDefinitions.Computer;
import Flat = SSOByRolesDefinitions.Flat;
import Motorcycle = SSOByRolesDefinitions.Motorcycle;

export interface ReduxAction {
    type: string
}

export type Dispatch = (action: ReduxAction) => void;

export type ObjectTypes = Computer | Flat | Motorcycle;
