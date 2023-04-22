import React from "react";
import "../Pages/Styles/History.css";
import { media } from "../Components/images";

const History = (props) => {
  const fine = media.map((image) => {
    return <img key={image.id} src={image.images} alt={image.name} />;
  });
  //   const header = <img src={final} alt="header" />;
  return (
    <div className="containerss">
      <h1 className="image-text">OUR UNIQUENESS</h1>

      <div className="image-list"> {fine} </div>
      <div className=" container-text">
        <div className="text">
          <p>
            Prophet John Jelili Yekini’s call was a similitude of Bibilical
            context. He was endorsed heavily with the gift of dream
            interpretation like Joseph Gen
            <br /> He was gifted with sharp and accurate vision like Prophet
            Isaiah, Elijah, Elisha and a host of others.
            <br />
            The church is fully endowed with series of prophetic application as
            led by the Spirit of God. Our Lord Jesus Christ in John 9:6 spat on
            the ground and made clay of the spittle and he anointed the eyes of
            the blind man with the clay. In Mark 8:23, it was recorded that he
            took the blind man by the hand and led him out of the town and when
            he had spit on his eyes and put his hands upon him, he asked him if
            he saw ought.
          </p>
          <p>
            In <b style={{ color: "green" }}>2Kings 2:21</b> the man of God
            Elisha, went forth unto the spring of the waters and cast the salt
            in there and said, thus saith the lord I have healed these waters;
            therefore shall not be from hence any more death or baren land .{" "}
            <span style={{ color: "green" }}> 2 Kings Vs:22 </span> so the
            waters were healed unto this day according to gthe saying of Elisha
            which he spake
          </p>
          <p>
            In <b style={{ color: "green" }}>Exodux 14vs 21-25</b> God of Moses
            stretched out his hand over the sea and the lord caused the sea to
            go back by a strong east wind all that night and made the sea dry
            land and the waters were divided <b>Vs22 :</b> and the children of
            Israel went to the mist of the sea upon the dry land and the waters
            were a wall unto them
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
