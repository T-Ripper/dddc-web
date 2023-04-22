import React from "react";
import BibleComponent from "../Components/Homepage/BibleComponent";
import Form from "../Components/Homepage/Form";
// eslint-disable-next-line
import FirebaseFirestoreService from "../FirebaseFirestoreService";
import Slider from "../Components/Homepage/Slider";

const HomePage = () => {
  // async function handleSubmitbutton(request) {
  //   try {
  //     const response = await FirebaseFirestoreService.createDocument(request);

  //     alert(`successfully submitted = ${response}`);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }
  // handleSubmitbutton={handleSubmitbutton}
  return (
    <div>
      <Slider />
      <BibleComponent />
      <Form></Form>
    </div>
  );
};

export default HomePage;
