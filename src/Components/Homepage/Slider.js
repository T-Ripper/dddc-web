import React from "react";
import "./Slider.css";
import salvation from "../../assets/salvation.mp4";
import video from "../../assets/video2.mp4";
// import final from "../assets/final.png";

class Slider extends React.Component {
  state = {
    index: 0,
    Slides: [salvation, video],
  };

  // componentDidMount = () => {

  //    if ( !this.onClickNext && !this.onClickPrev) {
  //      this.setState ({
  //         index: this.state.index + 1
  //      })
  //    }
  //    }
  // }

  onClickNext = () => {
    if (this.state.index + 1 === this.state.Slides.length) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  };
  onClickPrev = () => {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.Slides.length - 1,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  };
  render() {
    return (
      <div className="Container">
        <div className="left-button-div">
          <button
            style={{ fontSize: "18px", height: "50px" }}
            onClick={this.onClickPrev}
          >
            {/* <i className="angle left icon"></i> */}
            Previous
          </button>
        </div>

        <video
          src={this.state.Slides[this.state.index]}
          alt="Slider"
          autoPlay
          loop
          muted
        />

        <div className="right-button-div">
          <button
            className="right"
            style={{ marginLeft: "5px", fontSize: "18px", height: "50px" }}
            onClick={this.onClickNext}
          >
            {/* <i className="angle right icon"></i> */}
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
