import React from "react";
import { useState } from "react";
import "./contact.css";
import { Email, Location, Phone } from "../../assets";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.valuee);
  }

  return (
    <div className="contactContainer" id="contact">
      <h1>About Me</h1>
      <div className="contactTextContainer">
        <div className="contactForm">
          <h3>Work Experience:</h3>
          <p>
            <u> Resulting and Marketing Analyst</u> <br />
            <i>KMC Solutions (PB Tech & Advisory) 11/2019 - 04/2022</i>
          </p>
          <br />
          <p>
            <u>Customer Service Representative</u> <br />
            <i>WHG Customer Services Philippines Inc 04/2018 - 10/2019</i>
          </p>
          <br />
          <p>
            <u>Customer Service Representative</u> <br />
            <i>Hinduja Global Solutions 02/2016 - 12/2017</i>
          </p>
          <br /> <br />
          <h3>Education:</h3>
          <p>
            <u>Full-Stack Web Development Bootcamp</u>
            <br />
            Uplift Code Camp / Quezon City
            <br />
            <i>05/2022 - 11/2022</i>
          </p>
          <br />
          <p>
            <u>Bachelor of Science of Biology major in Human Biology</u>
            <br />
            De La Salle University - Dasmariñas / Dasmariñas, Cavite
            <br />
            <i>06/2011 - 03/2015</i>
          </p>
        </div>

        <div className="contactInfoContainer">
          <div className="contactInfo">
            <div className="contactInfoItem">
              <img src={Email} className="contactInfoIcon" />
              <div className="contactInfoText">
                <h3>Email</h3>
                <p>dbmacasiano@yahoo.com</p>
              </div>
            </div>

            <div className="contactInfoItem">
              <img src={Phone} className="contactInfoIcon" />
              <div className="contactInfoText">
                <h3>Contact Number</h3>
                <p>+63-906-055-9393</p>
              </div>
            </div>

            <div className="contactInfoItem">
              <img src={Location} className="contactInfoIcon" />
              <div className="contactInfoText">
                <h3>Location</h3>
                <p>Muntinlupa City, Philippines </p>
              </div>
            </div>
          </div>

          {/*SOCIAL MEDIA*/}
          <div className="socialMedia">
            <SocialIcon
              url="https://facebook.com/debmcsn"
              target="_blank"
              className="socialIcon"
            />
            <SocialIcon
              url="https://instagram.com/dbmcsn"
              target="_blank"
              className="socialIcon"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/debbie-macasiano"
              target="_blank"
              className="socialIcon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
