import React from "react";
import "/home/moringa/Desktop/React-project/upexpress/src/ServicesPage/Services.css";
import chair1 from "../images/interioir.jpg";
import bus1 from "../images/bus1.jpg";
import courier2 from "../images/courier2.jpg";
import lobby from "../images/lobby.jpg";

function handleClick() {
  return alert("Nevigate to Bookings");
}

export default function Services() {
  return (
    <>
      <section className="gymsection">
        <div className="gym">
          <span> INTER-CITY BUS TRAVEL </span>
          <h2>Travel Safe & Secure... Travel in Style... Travel Modern</h2>
          <p>
            Travel home for the holiday, <p></p>travel for work or business,
            carry gifts or traveling with tools,<p></p> our buses have enough
            space to carry what you require safely to any destination in East
            and Central Africa
          </p>
          <hr></hr>
          <button onClick={handleClick}>Book Now</button>
        </div>
        <img className="fitness" src={bus1} alt="interior" />
      </section>

      <div className="spa">
        <img className="spaImg" src={courier2} alt="spapic" />
        <div className="spaMessage">
          <span> COURIER SERVICES</span>
          <h2>Logistics and handling at its best.</h2>
          <p>
            Our ability to handle loose cargo and deliver it on time, <p></p>
            safely and in immaculate Condition has <p></p>afforded us the
            privilege of being recognized as the perfect corporate partner and
            household name for our customers.
          </p>
          <hr></hr>
          <button onClick={handleClick}>Book Now</button>
        </div>
      </div>

      <div className="conference">
        <div className="conferenceMsg">
          <span>LUXURY AND COMFORTABLE TRAVEL EXPERIENCE</span>
          <h2>Welcome to a world Travel Experience</h2>
          <p>Experience a blend of Luxury and confort when travelling</p>
          <hr></hr>
          <button onClick={handleClick}>Book Now</button>
        </div>
        <img className="conferenceImg" src={chair1} alt="conferencepic" />
      </div>

      <div className="pool">
        <img className="poolImg" src={lobby} alt="poolimage" />
        <div className="poolMsg">
          <span>POOL AND JACUZZI SERVICES</span>
          <h2>Welcome to the world's most refreshing experience </h2>
          <p>we offer the best of jacuzzi and pool experiences</p>
          <hr></hr>
          <button onClick={handleClick}>Book Now</button>
        </div>
      </div>
      {/* 
      <div className="lounge">
        <div className="loungeMsg">
          <span>LOUNGE SERVICES</span>
          <h2>welcome to the world's most relaxing place</h2>
          <p>We offer the best of comfort to easy your mind</p>
          <hr></hr>
          <button onClick={handleClick}>Book Now</button>
        </div>
        <img className="loungeImg" src={loungeImg} alt="loungeimage" />
      </div>

      <div className="rooms">
        <img className="roomImg" src={roomImg} alt="roomimage" />
        <div className="roomMsg">
          <span>ROOM SERVICES</span>
          <h2>Welcome to the world's most luxuriuos rooms</h2>
          <p>We offer the best of beddings to make you feel at home</p>
          <hr></hr>
          <button onClick={handleClick}>Book Now</button>
        </div>
      </div> */}
    </>
  );
}
