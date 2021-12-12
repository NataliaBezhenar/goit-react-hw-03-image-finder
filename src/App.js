import React, { Component } from "react";
import "./App.css";

import Modal from "./components/Modal/Modal";
import Searchbar from "./components/Searchbar/Searchbar";

// const key = "16152697-2240022566bfb10dd1cf00ec5";
// const per_page = 12;
const url =
  "https://pixabay.com/api/?key=16152697-2240022566bfb10dd1cf00ec5&q=yellow+flowers&image_type=photo";

class App extends Component {
  state = { showModal: false, loading: false, searchQuery: "" };

  ////////// Methods

  componentDidMount() {
    this.setState({
      loading: true,
    });
    fetch(url)
      .then((res) => res.json())
      .then(console.log)
      .finally(() => this.setState({ loading: false }));
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleFormSubmit = (searchQuery) => {
    this.setState({ searchQuery });
  };

  ////////// END Methods
  render() {
    <Searchbar />;
    const { showModal } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.loading && <h1>Loading.....</h1>}
        <h1> This is hw 3!;</h1>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hi from JS</h1>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
