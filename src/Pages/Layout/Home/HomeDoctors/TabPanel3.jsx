import { useContext } from "react";
import { doctorInfoContext } from "./DoctorContext";
import styled from "styled-components";
import ReactStarsIcon from "../../../../Components/ReactStars";

const StyledProfileReviews = styled.div`
  h2 {
    text-align: center;
    font-size: var(--secondary-header-font);
    color: var(--bg-button);
    text-decoration: underline;
    margin-bottom: 3rem;
  }

  > aside {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
`;

const ReviewCard = styled.div`
  box-shadow: var(--card-shadow);
  border-radius: var(--border-radius);
  padding: var(--font-button);

  img {
    width: 6.3rem;
    height: 6.3rem;
    border-radius: 100%;
    padding: 0.3rem;
    border: 1px solid var(--bg-button);
  }

  > aside {
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }
  p {
    color: var(--text-gray-primary);
  }

  > span {
  }
`;

function TabPanel3() {
  const infoContext = useContext(doctorInfoContext);

  const { reviews } = infoContext;

  return (
    <StyledProfileReviews>
      <h2>Reviews ({reviews.length})</h2>
      <aside>
        {reviews.map((review) => (
          <SingleReview key={review.name} review={review} />
        ))}
      </aside>
    </StyledProfileReviews>
  );
}

function SingleReview({ review }) {
  const { name, profession, image, review: comment, rating, date } = review;
  return (
    <ReviewCard>
      <aside>
        <img src={image} alt={name} />
        <span>
          <h4>{name}</h4>
          <p>{profession}</p>
        </span>
      </aside>
      <span>
        <p>{comment}</p>
        <ReactStarsIcon ratting={rating} />
        <p>{date}</p>
      </span>
    </ReviewCard>
  );
}

export default TabPanel3;
