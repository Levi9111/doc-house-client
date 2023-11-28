import ReactStars from "react-rating-stars-component";

function ReactStarsIcon({ reviews }) {
  const averagedRatting = parseFloat(
    (
      Object.values(reviews).reduce((accu, value) => accu + value.rating, 0) /
      reviews.length
    ).toFixed(1)
  );
  const iconStyles = {
    size: 30,
    value: averagedRatting,
    edit: false,
    a11y: true,
    isHalf: true,
    activeColor: "#F2871D",
  };
  return <ReactStars {...iconStyles} />;
}

export default ReactStarsIcon;
