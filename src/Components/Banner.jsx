import styled from "styled-components";
import capsule1 from "../assets/icons/capsule-1.svg";
import capsule2 from "../assets/icons/capsule-2.svg";
import { mediaQuery } from "../styles/CommonStyles";

const StyledBanner = styled.div`
  min-height: 50rem;
  position: relative;
  background-color: var(--bg-primary);

  ${mediaQuery`
  min-height: 37rem;
  `}

  aside {
    color: var(--text-white);
    width: var(--controlled-width);
    margin: auto;
    padding-top: 25rem;
    ${mediaQuery`
    padding-top: 12rem;
    text-align: center;
      `}

    p {
      font-size: var(--banner-font);
    }

    h3 {
      font-size: var(--primary-header-font);
    }
  }
`;
const Capsule1 = styled.img`
  position: absolute;
  bottom: -2.6rem;
  transform: rotate(180deg);
  margin-left: 5%;

  ${mediaQuery`
  margin-left: 0;
  transform: rotate(0deg);
  position: static;
  width: 8rem;
  `}
`;
const Capsule2 = styled.img`
  position: absolute;
  transform: rotate(220deg);
  right: 10%;
  bottom: 20%;
  height: 18rem;
  width: 18rem;

  ${mediaQuery`
  width: 8rem;
  bottom: 5%;
  `}
`;

function Banner({ title, header }) {
  return (
    <StyledBanner>
      <Capsule1 src={capsule1} />
      <Capsule2 src={capsule2} />
      <aside>
        <p>{title}</p>
        <h3>{header}</h3>
      </aside>
    </StyledBanner>
  );
}

export default Banner;
