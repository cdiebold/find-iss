import React, { Component } from "react";
import "./App.css";
import Darkness from "./Darkness/darkness";
import Header from "./header/header";
import sun from "./fonts/_weather/_PNG64/weather_sun.png";
import moon from "./fonts/_weather/_PNG64/weather_moon.png";
import SateliteMap from "./sateliteMap/satelite-map";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: [
        {
          icon: sun,
          text: "Day"
        },
        {
          icon: moon,
          text: "Night"
        }
      ],
      coordinates: {
        latitude: 0.0,
        longitude: 0.0
      }
    };

    this.fetchLatestCoordinates = this.fetchLatestCoordinates.bind(this);
  }
 

  fetchLatestCoordinates() {
    const address = "http://api.open-notify.org/iss-now.json";
    axios
      .get(address)
      .then((response)  => {
        console.log(response.data.iss_position);
        this.setState({
          coordinates: {
            latitude: response.data.iss_position.latitude || 0,
            longitude: response.data.iss_position.longitude || 0
          }
        });
      })
      .catch(function(error) {
        console.log("error fetching new corrdinates", error);
      });
  }
  componentDidMount() {
    const TEN_SECONDS = 10 * 1000;
    this.interval = setInterval(() => {
      const address = "http://api.open-notify.org/iss-now.json";
    axios
      .get(address)
      .then((response)  => {
        console.log(response.data.iss_position);
        this.setState({
          coordinates: {
            latitude: response.data.iss_position.latitude || 0,
            longitude: response.data.iss_position.longitude || 0
          }
        });
      })
      .catch(function(error) {
        console.log("error fetching new corrdinates", error);
      });
    }, TEN_SECONDS)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Darkness
          iconPath={this.state.icons[1].icon}
          text={this.state.icons[1].text}
          latitude={this.state.coordinates.latitude}
          longitude={this.state.coordinates.longitude}
        />
        <SateliteMap />
      </div>
    );
  }
}

export default App;
