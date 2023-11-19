import styled from "styled-components";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeServices from "../HomeServices/HomeServices";
import HomeAddressCards from "../HomeAddressCards/HomeAddressCards";
import HomeReviews from "../HomeReviews/HomeReviews";

const StyledHome = styled.section``;

function Home() {
  return (
    <StyledHome>
      <HomeBanner />
      <HomeServices />
      <HomeAddressCards />
      <HomeReviews />
    </StyledHome>
  );
}

export default Home;
