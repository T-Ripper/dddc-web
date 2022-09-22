import React from "react";
import BibleComponent from "../Components/Homepage/BibleComponent";
import Form from "../Components/Homepage/Form";

import Slider from "../Components/Homepage/Slider";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <BibleComponent />
      <Form />
    </div>
  );
};

export default HomePage;
