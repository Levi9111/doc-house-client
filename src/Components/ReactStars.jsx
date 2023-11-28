import ReactStars from "react-rating-stars-component";

function ReactStarsIcon({ reviews, ratting }) {
  let averagedRatting;
  if (reviews) {
    averagedRatting = parseFloat(
      (
        Object.values(reviews).reduce((accu, value) => accu + value.rating, 0) /
        reviews.length
      ).toFixed(1)
    );
  }

  if (ratting) averagedRatting = ratting;
  const iconStyles = {
    size: 30,
    value: averagedRatting,
    edit: false,
    a11y: true,
    isHalf: true,
    activeColor: "#E8350F",
  };
  return <ReactStars {...iconStyles} />;
}

export default ReactStarsIcon;
