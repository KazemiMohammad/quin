import { createSlice } from "@reduxjs/toolkit";
import { ILaunch } from "@/data/launch/types";
import { getLaunches } from "./action";
interface ILaunchSlice {
  launches: ILaunch[];
}
const initialState: ILaunchSlice = {
  launches: [],
};

const LaunchesSlice = createSlice({
  name: "launches",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(getLaunches.fulfilled, (state:ILaunchSlice, action:any) => {
      state.launches = action.payload;
    });
  },
});

export default LaunchesSlice.reducer;