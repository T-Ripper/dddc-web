import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="paragraph">
      <h1>Steps to Salvation</h1>

      <div className="border-line">
        <div className="cover">
          <form className="mh5">
            <label>Name </label> <br />
            <input type="text" /> <br />
            <label>Email </label> <br />
            <input type="email" /> <br />
            <label>Phone Number </label> <br />
            <input type="number" /> <br />
            <label>Address </label> <br />
            <textarea /> <br />
            <label>Prayer Request </label> <br />
            <textarea></textarea>
          </form>
        </div>
        <button className="mh6"> Send</button>
      </div>
    </div>
  );
};

export default Form;
