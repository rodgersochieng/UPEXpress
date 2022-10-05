import React from "react";

import bus3 from "../images/bus3.jpg";
import bus2 from "../images/bus2.jpg";
import "/home/moringa/Desktop/React-project/upexpress/src/HomePage/Home.css";

export default function Home() {
  return (
    <>
      <di>
        <img className="homebus" src={bus2} alt="homepbus" />
      </di>
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
    </>
  );
}
