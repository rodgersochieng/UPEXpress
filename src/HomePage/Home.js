import React from "react";

import bus3 from "../images/bus3.jpg";
import bus2 from "../images/bus2.jpg";
import bus6 from "../images/bus6.jpg";
import "/home/moringa/Desktop/React-project/upexpress/src/HomePage/Home.css";

export default function Home() {
  return (
    <>
      <div>
        <img className="homebus" src={bus2} alt="homepbus" />
      </div>
      <div className="about">
        <p className="aboutMsg">
          <h2>WHAT YOU SHOULD KNOW</h2>
          UPEXpress is a Luxury coach company operating within Kenya, Uganda,
          Tanzania & Rwanda. We are one of the most recognized luxury bus
          company operating in the region. We are here for you! We are Kenya's
          favorite transport bus company, offering quality unique services.
          Whatever the journey, whatever the time, whatever the place we are
          committed to providing you with the best. Safe, luxurious,
          comfortable, customer friendly, time conscious, has WIFI connection;
          we have all that a customer could ever want.
        </p>

        <img className="aboutImg" src={bus3} alt="bus3" />
      </div>

      <div className="message">
        <img className="bus6" src={bus6} alt="bus6" />
        <div className="paragraf">
          <p>
            <h2>Luxury Travel/Courier Across East Africa</h2>
            Are you afraid of heights, is flying too expensive, do you want to
            experience the thrill of a flight at a lower price? <p></p>We are
            here for you! we are committed to providing you with the best. Safe,
            luxurious, comfortable, customer friendly, time conscious, <p></p>
            has WIFI connection; we have all that a customer could ever want. We
            are the unique modern bus. We are the ultimate leaders.
          </p>
        </div>
      </div>

      <div className="bottom">
        <h1> Explore The Luxury Services We Offer </h1>
      </div>
    </>
  );
}
