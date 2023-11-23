import { css } from "styled-components";

export const mediaQuery = (styles) => css`
  @media (max-width: 768px) {
    ${styles}
  }
`;
