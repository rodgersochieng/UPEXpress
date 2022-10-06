import React from "react";
import "../BookingPage/booking.css";
// import Records from "../Records.json";

export default function Booking() {
  return (
    <div className="formcontainer">
      <form className="form">
        <label>Leaving from</label>
        <input placeholder="leaving from" type="text"></input>
        <label>Travelling to</label>
        <input placeholder="leaving from" type="text"></input>
        <label>Travelling on</label>
        <input placeholder="leaving from" type="date"></input>
        <label>Returning on</label>
        <input placeholder="leaving from" type="date"></input>

        <button type="submit"> Book</button>
      </form>
    </div>
  );
}
