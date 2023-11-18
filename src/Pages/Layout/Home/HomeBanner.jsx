import styled, { css } from "styled-components";
import Button from "../../../Components/Button";
import img1 from "../../../assets/images/img-home-1.png";
import img2 from "../../../assets/images/img-home-2.png";
import img3 from "../../../assets/images/img-home-3.png";

import capsule1 from "../../../assets/icons/capsule-1.svg";
import capsule2 from "../../../assets/icons/capsule-2.svg";
import ellipse from "../../../assets/icons/ellipse.svg";
import rectangle from "../../../assets/icons/rectangle.svg";

const mediaQuery = (styles) => css`
  @media (max-width: 768px) {
    ${styles}
  }
`;

const StyledHomeBanner = styled.div`
  background-color: var(--bg-primary);
  color: var(--text-white);
  padding: 20rem 0 10rem 0;
  overflow: hidden;
  position: relative;

  ${mediaQuery`
    padding: 13rem 0 10rem 0;
  `}
`;
const Banner = styled.div`
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;

  ${mediaQuery`
      grid-template-columns: 100%;
      text-align: center;
  `}

  h1 {
    font-size: var(--font-primary);
    margin-bottom: 2rem;
  }
  p {
    font-size: var(--banner-font);
    margin-bottom: 3rem;
  }
  aside {
    position: relative;
    margin-bottom: 4rem;
  }
`;
const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;
const BannerImg = styled.img`
  width: 26rem;
  height: 26rem;
  z-index: 2;

  ${mediaQuery`
    width: 14rem;
    height: 14rem;
  `}

  &:first-child {
    transform: translateY(-2rem);

    ${mediaQuery`
          transform: translate(0);
  `}
  }
  &:nth-child(2) {
    transform: translate(-13rem, 5rem);

    ${mediaQuery`
        transform: translate(-6rem,5rem);
  `}
  }
  &:nth-child(3) {
    transform: translate(-25rem, -5rem);

    ${mediaQuery`
    transform: translate(-11rem,-3rem);
  `}
  }
`;

const Capsule1 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;
const Capsule2 = styled.img`
  transform: rotate(230deg);
  width: 8rem;
  position: absolute;
  top: 0;
  right: 0;
`;
const Ellipse = styled.img`
  position: absolute;
  width: 30rem;
  right: 15%;
  top: 25%;

  ${mediaQuery`
    display: none;
  `}
`;
const Rectangle = styled.img`
  position: absolute;
  bottom: 6rem;
  left: -3rem;
  z-index: 1;
  ${mediaQuery`
  width: 6rem; 
  top: 10rem;    
  `}
`;
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
