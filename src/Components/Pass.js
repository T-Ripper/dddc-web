import React from "react";
import { db } from "../FirebaseConfig";
import { set, ref } from "firebase/database";

const Pass = ({ county }) => {
  const sendMessage = () => {
    set(ref(db, `message`), {
      county,
    });
  };
  return <div onClick={sendMessage}>{console.log(county)}</div>;
};

export default Pass;
