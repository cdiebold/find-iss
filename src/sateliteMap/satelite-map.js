import React, { Component } from "react";
import { Scene } from "@esri/react-arcgis";

class SateliteMap extends React.Component {
  render() {
    return (
      <Scene
        style={{ width: "100vw", height: "80vh" }}
        mapProperties={{ basemap: "satellite" }}
        viewProperties={{
          center: [-122.4443, 47.2529],
          zoom: 4
        }}
      />
    );
  }
}

export default SateliteMap;
