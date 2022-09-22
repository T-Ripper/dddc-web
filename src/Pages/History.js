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
      <h1 className="image-text">Our History</h1>

      <div className="image-list"> {fine} </div>
      <div className="text">
        <h1>HISTORICAL BACKGROUND</h1>
        <p>
          The Divine Dominion Deliverance Church is a Prophetic and evangelical
          denomination that resulted from the dynamic prophetic ministry of
          Prophet John Jelili Yekini who started the historia dream
          interpretation in 1999.
        </p>

        <p>
          The DDDC with its headquarters in Nigeria is distinctly an African
          church consisting of all the basic ethnic groups in Nigeria and which
          identifies itself as an evangelical church behaving to the efficacy of
          prayer, prophecy and divine manifestation of God’s power{" "}
          <span className="Bible">( Ps 110 vs 3)</span>{" "}
        </p>
        <p>
          The church behaves in the substitutionary atonement accomplished by
          the death of Christ. The church teaches that salvation is by grace
          through faith and not by good works.{" "}
          <span className="Bible">Titus 3:5.</span> The launch into full
          ministrial work began in 1999 at No 40, Morroco Road, Shomolu, Lagos,
          Nigeria.
        </p>

        <p>
          Initially, the church was formerly named The Dragon Destruction
          Deliverance Church. This was prompted by the vision that the man of
          God received where God revealed the magnitude of the assignment to do
          to him. He said God revealed three things to him namely (1) Dragon (2)
          Destruction (3) Deliverance According to him, the man of God said he
          was taken up to fight a very big Dragon, almost half of the whole
          earth. He saw a little boy high up (at a higher pedestal) who insisted
          that he must fight and conquer the massive animal. With divine
          intervention he touched the wild dragon and the animal was totally
          consumed. That was how he was instructed and mandated to destroy all
          the dragons in the lives of people.
        </p>

        <h2>THE JOURNEY SO FAR</h2>
        <p>
          After spending some years in Shomolu Area of Lagos state in Nigeria,
          West Africa. The church moved to Owode Mile 12 and later to Owode
          Elede where a substantial amount was spent to sand fill the water
          logged area. The church faced a lot of persecution in the hands of
          “land fighters”
        </p>
        <p>
          The church later moved to Okota Area in Lagos State. The Almighty God
          performed a lot of miracles in the lives of His people until
          persecution rose again from the very person who blessed the church
          with the location, one Mr. Akin. All necessary documents were handed
          over to Mr. Akin. <span className="Bible">(Hebrews 12:14) </span>
        </p>

        <h3>PRESENT LOCATION</h3>
        <p>
          To the glory of God, the people of God started having fellowship and
          prayer meetings at Prophet’s residence at Ayobo. In the midst of
          troubles and persecutions God granted another plots of land at Ayobo
          and church building was finally erected, completed and ready for use
          till date.
        </p>
      </div>
    </div>
  );
};

export default History;
