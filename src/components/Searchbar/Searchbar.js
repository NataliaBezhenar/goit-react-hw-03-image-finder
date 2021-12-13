import "./Searchbar.css";
import { Component } from "react";

export default class Searchbar extends Component {
  state = { searchQuery: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === "") {
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    //this.setState({searchQuery: ''});
  };

  handleQueryChange = (e) => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="button" className="button" onClick={this.handleSubmit}>
            <span className="buttonLabel">Search</span>
          </button>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}
