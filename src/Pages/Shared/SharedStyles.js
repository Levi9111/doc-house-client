// Footer

import styled from "styled-components";
import { mediaQuery } from "../../styles/CommonStyles";

const StyledFooter = styled.footer`
  background-color: #f3f3f3;
  padding-top: 13rem;
  ${mediaQuery`
  padding-top: 3.5rem;
  `}
`;
const FooterContainer = styled.div`
  width: var(--controlled-width);
  margin: auto;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: max-content 1fr;
  grid-column-gap: 10rem;

  ${mediaQuery`
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content 1fr;
  grid-row-gap: 2.3rem;
  `}
`;

const FooterTitle = styled.div`
  div {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 2rem;
  }
  ${mediaQuery`
    text-align: center;
  `}

  h3 {
    font-size: var(--font-icon);
    color: var(--bg-button);

    span {
      color: var(--bg-primary);
    }
  }

  p {
    font-size: var(--font-base);
    margin-bottom: 3rem;
  }
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${mediaQuery`
  grid-template-columns: 1fr;
  grid-row-gap: 2.3rem
  `}

  ul {
    list-style: none;
  }

  h3 {
    margin-bottom: 2rem;
  }

  li,
  a {
    margin-bottom: 1rem;
    color: var(--text-gray-primary);
    text-decoration: none;
  }
`;

const BottomFooter = styled.div`
  grid-column: 1/-1;
  grid-row: 2/-1;
  text-align: center;
  padding: 5rem;
  border-top: 1px solid var(--text-secondary-dark);

  ${mediaQuery`
  grid-column: 1/-1;
  grid-row: 3/-1;
  padding: 3rem;
  `}
`;

export {
  StyledFooter,
  FooterContainer,
  FooterTitle,
  FooterLinks,
  BottomFooter,
};
