import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule
} from "react-simple-maps";

// const geoUrl =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/asia.json";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"


const MapChart = () => {
  return (
    <ComposableMap>
      <Graticule stroke="green"/>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill="green"
              stroke="#000000"
              strokeWidth={0}
              style={{
                default: {
                  fill: "gray",
                },
                hover: {
                  fill: "green",
                },
                pressed: {
                  fill: "#E42",
                },
              }} onClick={(e)=> {
                console.log(e.target);
              }}/>
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
