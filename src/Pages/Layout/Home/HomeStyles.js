import styled, { css } from "styled-components";

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
  width: var(--controlled-width);
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

export {
  StyledHomeBanner,
  Banner,
  ImgContainer,
  BannerImg,
  Capsule1,
  Capsule2,
  Ellipse,
  Rectangle,
};

// Home Services

const StyledHomeServices = styled.div`
  padding: var(--controlled-padding);
  padding-top: 13rem;
  ${mediaQuery`
    padding-top: 3.2rem;
  `}
`;
const ServiesContainer = styled.div`
  width: var(--controlled-width);
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2.4rem;
  grid-row-gap: 3.2rem;
  ${mediaQuery`
  grid-template-columns: 1fr ;
  `}
`;
const BannerImage = styled.img`
  width: 100%;
`;
const ServiceDescriptor = styled.div`
  h2 {
    font-size: var(--primary-header-font);
    color: var(--text-dark);
  }
  p {
    font-size: var(--font-tertiary);
    color: var(--text-secondary-dark);
    font-weight: 400;
    margin: 2rem 0 3rem 0;
  }
`;

const ReactTabs = styled.aside`
  .react_tabs {
    padding: 0;
  }
  .react-tabs__tab-list {
    margin: 0;
    border-radius: var(--border-radius);
    border: 1px solid var(--text-secondary-dark);
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .react-tabs__tab {
    border: none;
    width: 100%;
    padding: 2.7rem 1.6rem;
  }

  .react-tabs__tab--selected {
    background-color: var(--bg-button);
    height: 100%;
    border-radius: var(--border-radius);
  }

  .react-tabs__tab-panel {
    margin-top: 5rem;

    img {
      width: 100%;
    }
  }
`;

export {
  StyledHomeServices,
  ServiesContainer,
  BannerImage,
  ServiceDescriptor,
  ReactTabs,
};

// Home Address Cards

const StyledHomeAddressCards = styled.div`
  padding: var(--controlled-padding);
  width: var(--controlled-width);
  margin: auto;
`;
const AddressCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2.4rem;
  grid-row-gap: 1.6rem;
  ${mediaQuery`
  grid-template-columns: 1fr;
  `}
`;
const Card = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 2rem;
  padding: 4rem 1.4rem 4rem 4rem;
  border-radius: var(--border-radius);
  color: var(--text-white);
  background-color: ${(props) => props.bgColor};

  h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: var(--font-button);
  }

  img {
    width: 5rem;
  }
`;

export { AddressCards, StyledHomeAddressCards, Card };

// Home Reviews
const StyledHomeReviews = styled.div``;
const ReviewsContainer = styled.div`
  width: var(--controlled-width);
  margin: auto;
  text-align: center;
  padding: var(--controlled-padding);
  h3 {
    font-size: var(--primary-header-font);
    font-weight: 700;
    margin-bottom: 2rem;
  }
  p {
    font-size: var(--font-tertiary);
    color: var(--text-secondary-dark);
  }
`;
const Reviews = styled.div`
  margin-top: 2rem;
  .react-multiple-carousel__arrow--left {
    left: 0;
  }
  .react-multiple-carousel__arrow--right {
    right: 0;
  }
  .react-multiple-carousel__arrow {
    background-color: var(--bg-button);
  }
  div {
    span {
      img {
        width: 6.5rem;
        height: 6.5rem;
        border-radius: 100%;
      }

      div {
      }
    }
  }
`;

const Review = styled.div`
  padding: 2rem;
  aside {
    border: 0.5px solid var(--text-secondary-dark);
    border-radius: 2rem;
    min-height: 35rem;
    padding: 5.7rem 4.4rem 4rem 5rem;
    text-align: start;
  }
  span {
    display: flex;
    gap: 2rem;
    justify-content: flex-start;
    margin-bottom: 2rem;

    div {
      flex-grow: 1;
      p {
        &:first-child {
          font-size: var(--font-button);
        }
        &:nth-child(2) {
          color: var(--text-gray-primary);
        }
      }
    }
  }
  p {
    &:last-child {
      font-size: var(--banner-font);
      color: var(--text-gray-primary);
    }
  }
`;
export { StyledHomeReviews, ReviewsContainer, Reviews, Review };

// Home Styles

const StyledHomeDoctors = styled.div`
  width: var(--controlled-width);
  padding: var(--controlled-padding);
  margin: auto;
`;
const DoctorsTitle = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  h2 {
    font-size: var(--primary-header-font);
    margin-bottom: 2rem;
  }
  p {
    font-size: var(--font-base);
    color: var(--text-dark-secondary);
  }
`;
const Doctors = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  ${mediaQuery`
  grid-template-columns:1fr;
  `}
`;
const Doctor = styled.div`
  padding: 2rem;
  border: 1px solid var(--text-gray-primary);
  border-radius: var(--border-radius);
  span {
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-row-gap: 1rem;
    grid-column-gap: 2rem;
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: var(--font-button);
  }

  p {
    color: var(--text-gray-primary);
    font-weight: 300;
  }
  aside {
    .react-stars {
      span {
        font-size: 2rem;
      }
    }
  }
`;

export { StyledHomeDoctors, DoctorsTitle, Doctors, Doctor };
