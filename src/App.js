import React, { Component } from "react";
import "./App.css";

import Modal from "./components/Modal/Modal";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import { fetchImages } from "./services/fetchApi";

class App extends Component {
  state = {
    showModal: false,
    modalContent: "",
    loading: false,
    searchQuery: "",
    status: "idle",
    output: [],
    page: 1,
  };

  ////////// Methods

  componentDidUpdate(prevProps, { searchQuery, page }) {
    if (searchQuery !== this.state.searchQuery || page !== this.state.page) {
      console.log("pages changed " + page);

      this.getData();
    }
  }
  getData = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    fetchImages(searchQuery, page)
      .then(({ hits }) => {
        this.setState(({ output }) => {
          return { output: [...output, ...hits] };
        });
      })
      .catch((error) => console.log(error.message))
      .finally(this.setState({ loading: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  modalContentSet = (itemId) => {
    const { output } = this.state;
    const element = output.find(({ id }) => id === itemId);
    this.setState({ modalContent: element.largeImageURL });
  };

  handleFormSubmit = (searchQuery) => {
    this.setState({ searchQuery, page: 1, output: [] });
  };

  handleLoadMoreBtnClick = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  modalContentSet = (itemId) => {
    const { output } = this.state;
    const element = output.find(({ id }) => id === itemId);
    this.setState({ modalContent: element.largeImageURL });
  };

  ////////// END Methods
  render() {
    <Searchbar />;
    const { showModal, output, modalContent } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.loading && <h1>Loading.....</h1>}
        <ImageGallery
          images={output}
          onClick={this.toggleModal}
          onItemClick={this.modalContentSet}
        />
        {showModal && (
          <Modal content={modalContent} onClose={this.toggleModal}>
            <h1>Hi from JS</h1>
          </Modal>
        )}
        <Button onLoadMoreClick={this.handleLoadMoreBtnClick} />
      </div>
    );
  }
}

export default App;
