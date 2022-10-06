import React, { useEffect, useState } from "react";
import "../BookingPage/booking.css";
// import Records from "../Records.json";

const baseUrl = "http://localhost:8002/routes/";

export default function Booking() {
  const [busRoutes, setBusRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState("");
  const [departureTime, setDepartureTime] = useState("");

  useEffect(function useEffectFunction() {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((result) => {
        setBusRoutes(result);
        console.log("routes" + result);
      });
  }, []);

  function handleclick(e) {
    e.preventDefault();
    setSelectedRoute(document.getElementById("routes").value);
    setDepartureTime(document.getElementById("date").value);
  }

  return (
    <div className="formcontainer">
      <form className="form">
        <label>Route</label>
        <select name="routes" id="routes">
          {busRoutes?.map((busRoute, i) => (
            <option key={i} value={busRoute.route}>
              {busRoute.route}
            </option>
          ))}
        </select>
        {/* <label>Travelling to</label> */}
        {/* <input placeholder="leaving from" type="text"></input> */}
        <label>Travelling on</label>
        <input id="date" type="date"></input>
        {/* <label>Returning on</label>
        <input placeholder="Optional" type="date"></input> */}

        <button onClick={(e) => handleclick(e)} type="submit">
          Book A Receipt
        </button>
      </form>

      <div className="receipt">
        <h2>YOUR RECEIPT</h2>
        <p>Route:{selectedRoute}</p>
        <p>Departure Date:{departureTime}</p>
      </div>
    </div>
  );
}
