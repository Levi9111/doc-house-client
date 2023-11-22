import { useQuery } from "@tanstack/react-query";

import {
  StyledHomeReviews,
  ReviewsContainer,
  Reviews,
  Review,
} from "../HomeStyles";
import Spinner from "../../../../Components/Spinner";
import Carousel from "./CarouselContainer";
import Quote from "../../../../assets/icons/quote";
import { fetchReviews } from "../../../../FetchData/fetchData";

function HomeReviews() {
  const {
    isLoading,
    data: reviews,
    error,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchReviews,
  });

  if (isLoading) return <Spinner />;
  if (error)
    return <StyledHomeReviews> Error Fetching reviews</StyledHomeReviews>;

  return (
    <StyledHomeReviews>
      <ReviewsContainer>
        <h3>What Our Patients Says</h3>
        <p>
          From dedicated healthcare professionals to advanced facilities,
          discover the difference that sets us apart. Your well-being is our
          priority, and we&rsquo;re honored to share these testimonials that
          reflect the quality of our services.
        </p>
        <Reviews>
          <Carousel>
            {reviews.map((review) => (
              <Review key={review.id}>
                <aside>
                  <span>
                    <img src={review.img} alt="" />
                    <div>
                      <p>{review.name}</p>
                      <p>{review.profession}</p>
                    </div>
                    <Quote />
                  </span>
                  <p>{review.review}</p>
                </aside>
              </Review>
            ))}
          </Carousel>
        </Reviews>
      </ReviewsContainer>
    </StyledHomeReviews>
  );
}

export default HomeReviews;
