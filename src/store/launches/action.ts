import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLaunches as getLaunchesData } from "@/data/launch";

export const getLaunches = createAsyncThunk(
  "launches/getLaunches",
  async ({ startDate, endDate }: { startDate: Date; endDate: Date }) => {
    const launchesData = await getLaunchesData(startDate, endDate);
    return launchesData;
  }
);
