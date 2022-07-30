import React from "react";
import { Marker, Popup } from "react-leaflet";
import { ILounch } from "../../data/lounch/types";

interface ILocationMarkerProps {
  launches: ILounch[];
}

function LocationMarker({ launches }: ILocationMarkerProps) {
  if (launches.length) {
    return (
      <>
        {launches.map((item: ILounch,index:number) => {
          return (
            <Marker
              key={item.id+index}
              position={[item.pad.latitude, item.pad.longitude]}
            >
              <Popup>{item.name}</Popup>
            </Marker>
          );
        })}
      </>
    );
  }

  return <></>;
}

export default LocationMarker;
