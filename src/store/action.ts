import { ActionType } from "./actionType";
import { ILaunch } from "@/data/launch/types";

export const AddLaunches = (payload: ILaunch[]) => ({
    type: ActionType.ADD_LAUNCHES,
    payload: payload
})

export const SetSelectedLaunch = (payload: ILaunch) => ({
    type: ActionType.SET_SELECTED_LAUNCH,
    payload: payload
})