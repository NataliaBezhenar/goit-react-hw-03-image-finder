import { Component } from "react";
import "./ImageGalleryItem.css";

export default class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, tags } = this.props.currentObj;
    return (
      <li key={id} className="ImageGalleryItem">
        <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
      </li>
    );
  }
}
