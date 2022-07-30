import React from "react";
import { useSelector } from "react-redux";
import Map from "../Map";
import { MainStoreStateType } from "../../store/reducer";
const mapState = (state: MainStoreStateType) => {
  return {
    launches: state.lounches,
    selectedlaunch: state.selectedLounch,
  };
};
function Body() {
  const { launches } = useSelector(mapState);

  return (
    <div className="h-full">
      <Map launches={launches} />
    </div>
  )
}


export default Body;
