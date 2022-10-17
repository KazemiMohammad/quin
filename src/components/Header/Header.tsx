import React, { useEffect, useState } from "react";
import { getLaunches } from "@/data/launch";
import { AddLaunches } from "@/store/action";
import { ILaunch } from "@/data/launch/types";
import { useDispatch, useSelector } from "react-redux";
import { MainStoreStateType } from "@/store/reducer";

const mapState = (state: MainStoreStateType) => {
  return {
    startDate: state.filter.startDate,
    endDate: state.filter.endDate,
  };
};
function Header() {
  const { startDate, endDate } = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    loadInitiallaunchesData();
  }, []);

  const [launchesCount, setLaunchesCount] = useState(0);

  const loadInitiallaunchesData = async () => {
    try {
      const result = await getLaunches(startDate, endDate);
      const launches: ILaunch[] = result.data.results;
      console.log(launches.length);
      setLaunchesCount(launches.length);
      dispatch(AddLaunches(launches));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <label htmlFor="header" className="text-white">
        Count of launches: {launchesCount}
      </label>
      <input
        type="text"
        id="header"
        value={launchesCount}
        placeholder="number of launches"
      />
    </div>
  );
}

export default Header;
