import React, { Component } from "react";
import "./App.css";

import Modal from "./components/Modal/Modal";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

class App extends Component {
  state = { showModal: false, loading: false, searchQuery: "", status: "idle" };

  ////////// Methods

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
        <ImageGallery searchQuery={this.state.searchQuery}></ImageGallery>
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
// <ImageGallery searchQuery={this.state.searchQuery}>
//   <Searchbar onSubmit={this.handleFormSubmit} /> <ImageGalleryItem />
//   <Searchbar onSubmit={this.handleFormSubmit} />
//   <Searchbar onSubmit={this.handleFormSubmit} />
//   <Searchbar onSubmit={this.handleFormSubmit} />
// </ImageGallery>
