import React, { useState } from "react";
import { db } from "../../FirebaseConfig";
//import { uid } from "uid";
import { set, ref } from "firebase/database";

import "./Form.css";

const Form = () => {
  // const [details, setDetails] = useState({
  //   name: "",
  //   email: "",
  //   phone: null,
  //   address: "",
  //   request: "",
  // });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [request, setRequest] = useState("");
  // const handleDetailsChange = (e) => {
  //   setDetails(e.target.value);
  //   // setDetails({ ...details, [e.target.name]: e.target.value });
  // };

  const createDocument = () => {
    // const uuid = uid();
    set(ref(db, `details`), {
      name,
      email,
      phone,
      address,
      request,
    });
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setRequest("");
  };

  return (
    <div className="paragraph">
      <h1>Steps to Salvation</h1>

      <div className="border-line">
        <div className="cover">
          <form className="mh5">
            <label>Name </label> <br />
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              id="name"
              onChange={(e) => setName(e.target.value)}
            />{" "}
            <br />
            <label>Email </label> <br />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            <label>Phone Number </label> <br />
            <input
              type="number"
              placeholder="Enter your number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />{" "}
            <br />
            <label>Address </label> <br />
            <textarea
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>{" "}
            <br />
            <label>Prayer Request </label> <br />
            <textarea
              placeholder="Enter your request"
              value={request}
              onChange={(e) => setRequest(e.target.value)}
            ></textarea>
          </form>
        </div>
        <button onClick={createDocument} type="submit" className="mh7">
          {" "}
          Send
        </button>
      </div>
    </div>
  );
};

export default Form;
