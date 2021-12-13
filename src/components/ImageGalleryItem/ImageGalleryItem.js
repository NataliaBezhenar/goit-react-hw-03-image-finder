import { Component } from "react";
import "./ImageGalleryItem.css";

export default class ImageGalleryItem extends Component {
  modalContent = (id) => {
    this.props.onItemClick(id);
    console.log(id);
  };
  render() {
    const { id, webformatURL, tags } = this.props;
    return (
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => this.modalContent(id)}
      />
    );
  }
}
