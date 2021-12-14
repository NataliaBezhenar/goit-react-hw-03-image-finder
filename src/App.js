import React, { Component } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";

import Modal from "./components/Modal/Modal";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import { fetchImages } from "./services/fetchApi";

class App extends Component {
  state = {
    showModal: false,
    modalContent: "",
    searchQuery: "",
    status: "idle",
    output: [],
    page: 1,
    error: null,
  };

  componentDidUpdate(prevProps, { searchQuery, page }) {
    if (searchQuery !== this.state.searchQuery || page !== this.state.page) {
      this.setState({ status: "pending" });
      this.getImages();
    }
    this.handleScroll();
  }

  handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  getImages = () => {
    const { searchQuery, page } = this.state;
    fetchImages(searchQuery, page)
      .then(({ hits }) => {
        this.setState(({ output }) => {
          return { output: [...output, ...hits], status: "resolved" };
        });
      })
      .catch((error) => this.setState({ error, status: "rejected" }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  modalContentShow = (itemId) => {
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

  modalContentShow = (itemId) => {
    const { output } = this.state;
    const element = output.find(({ id }) => id === itemId);
    this.setState({ modalContent: element.largeImageURL });
  };

  render() {
    const { showModal, output, modalContent, status } = this.state;
    const showBtn = output.length > 0 && status !== "rejected";
    if (status === "idle") {
      return (
        <div>
          <Searchbar onSubmit={this.handleFormSubmit} />
          <h1>Enter search query</h1>
        </div>
      );
    }

    if (status === "pending") {
      return (
        <div>
          <Searchbar onSubmit={this.handleFormSubmit} />
          <h3>LoAdiNg-------------------</h3>
        </div>
      );
    }

    if (status === "rejected") {
      return (
        <div>
          <Searchbar onSubmit={this.handleFormSubmit} />
          <h1>Nothing was found on your query</h1>
        </div>
      );
    }

    if (status === "resolved") {
      return (
        <div className="App">
          <Searchbar onSubmit={this.handleFormSubmit} />
          <ImageGallery
            images={output}
            onClick={this.toggleModal}
            onItemClick={this.modalContentShow}
          />
          {showBtn && <Button onLoadMoreClick={this.handleLoadMoreBtnClick} />}
          {showModal && (
            <Modal content={modalContent} onClose={this.toggleModal} />
          )}
          <ToastContainer autoClose={3000} position="top-center" />
        </div>
      );
    }
  }
}

export default App;
