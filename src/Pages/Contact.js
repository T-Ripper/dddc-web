import React from "react";
import Country from "../Components/Contact/Country";
import "../Components/Contact/Map.css";
const Contact = () => {
  return (
    <div className="contain  ">
      <div className="ui inverted segment address ">
        <h4 className="ui header"> Contact Details </h4>
        <p> 12 Lape Odusola Street Off Road Megida bus-stop Ayobo Lagos</p>
        <p> atumoala@gmail.com</p>
      </div>

      <form className="ui form ">
        <h4 className="ui dividing header">Send Us a Message</h4>
        <div className="field">
          <label>Name</label>
          <div className="two fields">
            <div className="field">
              <input
                type="text"
                // name="shipping[first-name]"
                placeholder="First Name"
              />
            </div>
            <div className="field">
              <input
                type="text"
                // name="shipping[last-name]"
                placeholder="Last Name"
              />
            </div>
          </div>
          <Country />
          <br />
          <label> Subjext </label>
          <input type="text" />
          <br />
          <label> Your Message</label>
          <textarea></textarea>
        </div>
      </form>
      <button className="ui green button">Send</button>
      <div className="container mt5">
        <h2> Location Map</h2>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4834308229406!2d3.2391788!3d6.5866713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9b15281d6467%3A0xb37bb53e1dfae0a1!2sDivine%20Dominion%20Deliverance%20Church!5e0!3m2!1sen!2sng!4v1656426715119!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: "1" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
