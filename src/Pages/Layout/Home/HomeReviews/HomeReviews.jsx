import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import Spinner from "../../../../Components/Spinner";

const StyledHomeReviews = styled.div``;

const fetchReviews = async () => {
  try {
    const response = await fetch("reviews.json");
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error("Error fetching reviews");
  }
};

function HomeReviews() {
  const {
    isLoading,
    data: reviews,
    error,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchReviews,
  });
  console.log(reviews);
  if (isLoading) return <Spinner />;
  if (error)
    return <StyledHomeReviews> Error Fetching reviews</StyledHomeReviews>;
  return <StyledHomeReviews>HomeReviews</StyledHomeReviews>;
}

export default HomeReviews;
