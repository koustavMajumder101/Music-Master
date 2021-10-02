import React, { Component } from "react";
class Search extends Component {
  state = { artistQuery: "" };
  updateArtistQuery = (event) => {
    this.setState({ artistQuery: event.target.value });
  };
  handelKeyPress = (event) => {
    if (event.key === "Enter") {
      this.searchArtist();
    }
  };
  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery);
    //coming from <Search searchArtist={this.searchArtist} /> in App.js
  };
  render() {
    return (
      <div>
        <input
          placeholder="search an artist"
          onKeyPress={this.handelKeyPress}
          onChange={this.updateArtistQuery}
        />
        <button onClick={this.searchArtist} className="btn">
          search
        </button>
      </div>
    );
  }
}

export default Search;
