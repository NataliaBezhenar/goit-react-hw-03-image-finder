import { Component } from "react";
import "./ImageGallery.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { fetchImages } from "../../services/fetchApi";

const APP_KEY = "16152697-2240022566bfb10dd1cf00ec5";
const per_page = 12;
const URL = "https://pixabay.com/api/?key=";
let page = 1;

export default class ImageGallery extends Component {
  state = { output: null, loading: false };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      console.log("Query has changed");
      console.log(this.props);
      this.setState({ loading: true });
      const queryString = `${URL}${APP_KEY}&q=${encodeURIComponent(
        this.props.searchQuery
      )}&per_page=${per_page}&page=${page}&image_type=photo&orientation=horizontal`;

      fetchImages(queryString)
        .then((output) => this.setState({ output }))
        .catch((error) => console.log(error))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { output } = this.state;
    return (
      <div>
        {this.state.loading && <h1>Loading.....</h1>}
        <ul className="ImageGallery">
          {output &&
            output.hits.map((item) => <ImageGalleryItem currentObj={item} />)}
        </ul>
      </div>
    );
  }
}
