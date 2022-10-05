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

      <div className="mission">
        <h1 className="Missionhd">Our Mission/Vision</h1>
        <p className="missionMsg">
          To provide A luxurious responsible travel experience than never before
          <p></p>Passion: We are proud of our organization and enthusiastic in
          our approach to all activities for continuous search of excellence
        </p>
      </div>

      <div className="contact">
        <h1 className="cont">Contact</h1>
        <h2 className="help">How can we Help you ?</h2>
        <p className="contMsg">
          upexpress is always just an email or phone call away. On this page you
          find direct contact details for most matters. Should you have a
          special request or a general question, please fill out the contact
          form below. Welcome.
        </p>
        <div className="ofiice">
          <div>
            <h2>Head Office</h2>
            <p>Upexpress Bus Corporation</p>
            <p>Kenya, Nairobi - Westlands</p>
            <p>WestHeight Plaza</p>
          </div>
          <div className="Media">
            <h2>Booking Related Questions or Request</h2>
            <p>
              Upexpress Buses Booking Relations are responsible for all external
              corporate communication relating to Upexpress Buses. Journalists
              can reach our Media Relations Manager directly or through the
              contact information below.
            </p>
            <> 0729942447</>
            <p>upexpressbuses@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
