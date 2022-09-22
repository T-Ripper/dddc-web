import React from "react";

const Give = () => {
  const paystackButton = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <p> Pastack Pyament Method </p>
      <button className="ui primary button" onClick={() => paystackButton()}>
        <a
          href="https://paystack.com/pay/j1nq47zrdc"
          style={{ color: "white" }}
        >
          Click
        </a>
      </button>
    </div>
  );
};

export default Give;
