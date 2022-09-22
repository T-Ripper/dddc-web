import React from "react";
import "../Pages/Styles/History.css";
import { media } from "../Components/images";

const Media = (props) => {
  const gallery = media.map((image) => {
    return <img key={image.id} src={image.images} alt={image.name} />;
  });

  return <div className="image-list"> {gallery} </div>;
};

export default Media;
