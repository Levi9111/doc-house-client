import Button from "../../../Components/Button";
import img1 from "../../../assets/images/img-home-1.png";
import img2 from "../../../assets/images/img-home-2.png";
import img3 from "../../../assets/images/img-home-3.png";

import capsule1 from "../../../assets/icons/capsule-1.svg";
import capsule2 from "../../../assets/icons/capsule-2.svg";
import ellipse from "../../../assets/icons/ellipse.svg";
import rectangle from "../../../assets/icons/rectangle.svg";

import {
  StyledHomeBanner,
  Banner,
  ImgContainer,
  BannerImg,
  Capsule1,
  Capsule2,
  Ellipse,
  Rectangle,
} from "./HomeStyles";

function HomeBanner() {
  return (
    <StyledHomeBanner>
      <Capsule1 src={capsule1} />
      <Ellipse src={ellipse} />
      <Banner>
        <aside>
          <Capsule2 src={capsule2} />
          <h1>Your Best Medical Help Center</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero
            itaque, ipsam consectetur illo enim omnis eum rerum ipsa ab!
          </p>
          <Button>All Service</Button>
        </aside>
        <ImgContainer>
          <BannerImg src={img1} alt="" />
          <BannerImg src={img2} alt="" />
          <BannerImg src={img3} alt="" />
          <Rectangle src={rectangle} />
        </ImgContainer>
      </Banner>
    </StyledHomeBanner>
  );
}

export default HomeBanner;
