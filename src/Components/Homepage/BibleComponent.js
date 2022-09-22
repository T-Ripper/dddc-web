import React from "react";
import "./BibleComponent.css";

const BibleComponent = () => {
  return (
    <div className="bible-cover">
      <div className="verse1">
        <h3> Psalm 5:12 </h3>
        <h4>
          For thou, Lord wilt bless the righteous ; with favor with thou compass
          him with a shield
        </h4>
      </div>

      <div className="verse2">
        <h3> Romans 6:6 </h3>
        <h4>
          For we know our old self is crucified with him so that the body ruled
          by sin might be done away with. We should no longer be slaves to sin.
        </h4>
      </div>

      <div className="verse3">
        <h3> Corinthians 3: 16 </h3>
        <h4>
          Dont you know that you yourselves are God`s temple and that God`s
          spirit dwells in your mist
        </h4>
      </div>
      <div className="verse4">
        <h3> Psalm 147:11 </h3>
        <h4>
          The Lord delights in those who fear him , who put their hope in his
          unfailing love
        </h4>
      </div>
      <div className="verse5">
        <h3> Luke 1:37 </h3>
        <h4>For no word from God will ever fail.</h4>
      </div>
    </div>
  );
};

export default BibleComponent;
