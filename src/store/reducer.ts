import { ActionType } from "./actionType";
import { ILaunch } from "@/data/launch/types";

const satrtDate = new Date();
const endDate = new Date();
endDate.setMonth(satrtDate.getMonth() + 3);

const InitialState = {
  filter:{
    startDate:satrtDate,
    endDate:endDate,
    
  },
  launches: [] as ILaunch[],
  selectedLaunch:null as ILaunch | null,
};
export type MainStoreStateType = typeof InitialState;

const MainReducer = (state: any = InitialState, action: any) => {
  switch (action.type) {
    case ActionType.ADD_LAUNCHES:
      return { ...state, launches: [...state.launches, ...action.payload] };

    case ActionType.SET_SELECTED_LAUNCH:
      return { ...state, selectedLaunch: action.payload };

    default:
      return state;
  }
};

export default MainReducer;
