import React from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Pass from "../Pass";

class Country extends React.Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "" };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }
  // passing = () => {
  //   console.log(this.state.country());
  // };

  render() {
    const { country, region } = this.state;
    return (
      <div>
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)}
        />
        <br />
        {/* {console.log(this.state.country)} */}

        <RegionDropdown
          region={region}
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)}
        />
        <Pass county={this.state.country} />
      </div>
    );
  }
}

export default Country;
