import React from "react";
import "../Pages/Styles/History.css";
import { pics } from "../Components/images";

const History = (props) => {
  const fine = pics.map((image) => {
    return <img key={image.id} src={image.images} alt={image.name} />;
  });
  //   const header = <img src={final} alt="header" />;
  return (
    <div className="containerss">
      <h1 className="image-text">OUR UNIQUENESS</h1>

      <div className="image-list"> {fine} </div>
      <div className="text">
        <p>
          Prophet John Jelili Yekini’s call was a similitude of Bibilical
          context. He was endorsed heavily with the gift of dream interpretation
          like Joseph Gen{" "}
        </p>

        <p>
          He was gifted with sharp and accurate vision like Prophet Isaiah,
          Elijah, Elisha and a host of others.
        </p>
        <p>
          The church is fully endowed with series of prophetic application as
          led by the Spirit of God. Our Lord Jesus Christ in John 9:6 spat on
          the ground and made clay of the spittle and he anointed the eyes of
          the blind man with the clay. In Mark 8:23, it was recorded that he
          took the blind man by the hand and led him out of the town and when he
          had spit on his eyes and put his hands upon him, he asked him if he
          saw ought.
        </p>

        <p>
          In 2Kings 2:21, the man of God_________, went forth unto the spring of
          the waters and cast the salt in there and said, thus saith_________
          baren land In exo 14vs 21-25 God of Moses
        </p>
      </div>
    </div>
  );
};

export default History;
