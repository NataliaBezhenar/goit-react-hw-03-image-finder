import React, { Component } from "react";
import "./App.css";

import Modal from "./components/Modal/Modal";

class App extends Component {
  state = { showModal: true };

  ////////// Methods

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  ////////// END Methods
  render() {
    const { showModal } = this.state;
    return (
      <div className="App">
        This is hw 3!;
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
