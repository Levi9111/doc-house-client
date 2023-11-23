import styled from "styled-components";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeServices from "../HomeServices/HomeServices";
import HomeAddressCards from "../HomeAddressCards/HomeAddressCards";
import HomeReviews from "../HomeReviews/HomeReviews";
import HomeDoctors from "../HomeDoctors/HomeDoctors";
import HomeContact from "../HomeContact/HomeContact";

const StyledHome = styled.section``;

function Home() {
  return (
    <StyledHome>
      <HomeBanner />
      <HomeServices />
      <HomeAddressCards />
      <HomeReviews />
      <HomeDoctors />
      <HomeContact />
    </StyledHome>
  );
}

export default Home;
