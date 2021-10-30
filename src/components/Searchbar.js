import React from "react";

class Searchbar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onSearchSubmit = (event) => {
    event.preventDefault();
    this.setState({ term: event.target.value });
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <h1 className="ui huge header mt-3">ReactNews</h1>
        <form className="ui form" onSubmit={this.onSearchSubmit}>
          <div className="ui segment">
            <label>News Search</label>
            <input
              onChange={this.onInputChange}
              type="text"
              name="first-name"
              placeholder="Type something"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
