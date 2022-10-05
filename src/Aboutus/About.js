import React from "react";
import "/home/moringa/Desktop/React-project/upexpress/src/Aboutus/About.css";
import EngImg from "../images/mechanics.jpeg";

export default function AboutUs() {
  return (
    <>
      <h1 className="Mesg">We Are Commited To Serving You </h1>
      <div className="Majormsg">
        <p>That is why we Ensure we give you nothing but the BEST</p>
      </div>

      <div className="Mechanics">
        <p className="Mmsg">
          <h2>Meet Our Engineering Team</h2>
          These are people behind physical or mechanical systems, such as power
          and energy systems<p></p>these people ensure the safety of our fleet
        </p>
        <img className="mechanicsImg" src={EngImg} alt="mechanics" />
      </div>
    </>
  );
}
