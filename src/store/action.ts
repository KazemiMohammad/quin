import { ActionType } from "./actionType";
import { ILounch } from "../data/lounch/types";

export const AddLounches = (payload: ILounch[]) => ({
    type: ActionType.ADD_LOUNCHES,
    payload: payload
})

export const SetSelectedLounch = (payload: ILounch) => ({
    type: ActionType.SET_SELECTED_LOUNCH,
    payload: payload
})