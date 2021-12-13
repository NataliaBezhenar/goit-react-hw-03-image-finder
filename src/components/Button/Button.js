import "./Button.css";
export default function Button({ onLoadMoreClick }) {
  return (
    <button type="button" className="Button" onClick={onLoadMoreClick}>
      Load More
    </button>
  );
}
