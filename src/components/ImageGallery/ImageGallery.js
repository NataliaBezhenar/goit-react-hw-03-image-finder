import { Component } from "react";
import "./ImageGallery.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default class ImageGallery extends Component {
  state = { output: null, loading: false };

  handleOpenModal = (e) => {
    if (e.target !== e.currentTarget) {
      this.props.onClick();
    }
  };
  render() {
    const { images, onItemClick } = this.props;
    return (
      <ul className="ImageGallery" onClick={this.handleOpenModal}>
        {images &&
          images.map((image) => (
            <li key={image.id} className="ImageGalleryItem">
              <ImageGalleryItem {...image} onItemClick={onItemClick} />
            </li>
          ))}
      </ul>
    );
  }
}
