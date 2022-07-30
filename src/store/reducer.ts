import { ActionType } from "./actionType";
import { ILounch } from '../data/lounch/types';

const InitialState = {
    lounches: [] as ILounch[],
    selectedLounch: {
        lat: 51.505,
        lng: -0.09,
    } as ILounch
}
export type MainStoreStateType = typeof InitialState;

const MainReducer = (state: any = InitialState, action: any) => {
    switch (action.type) {
        case ActionType.ADD_LOUNCHES:
            return { ...state, lounches: [...state.lounches,  ...action.payload] };

        case ActionType.SET_SELECTED_LOUNCH:
            return { ...state, selectedLounch: action.payload };

        default:
            return state;
    }
}

export default MainReducer;