import styled, { css } from "styled-components";

const styledList = css`
  font-size: var(--banner-font);
  color: var(--text-secodary-white);
  margin: 0 3.2rem;
  cursor: pointer;
  &:hover {
    color: var(--color-primary);
  }
`;

const activeLink = css`
  color: var(--color-primary);
`;

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 111;
  transition: background 0.3s;
  padding: 1rem 0;
  ${(props) =>
    props.isActive &&
    css`
      background: rgba(51, 51, 51, 0.9);
    `}
`;

const NavFixed = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: var(--controlled-width);
  margin: auto;
  color: var(--color-black);
  ${(props) =>
    props.isActive &&
    css`
      color: var(--color-white);
    `}
  @media (max-width:768px) {
    display: none;
  }
`;

const NavResponsive = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: relative;
  }
`;

const Img = styled.img.attrs((props) => ({
  onClick: props.onClick,
}))`
  width: 7rem;
  height: 7rem;
  cursor: pointer;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1.2rem;
    z-index: 3;
  }
`;

const StyledLi = styled.li`
  ${styledList};
  ${(props) => (props.isActive ? activeLink : "")}
  @media (max-width: 768px) {
    margin-bottom: 0.8rem;
  }
`;

const NavResponsiveTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 4;
  transition: all 0.4s;

  img,
  span {
    cursor: pointer;
    z-index: 5;
  }

  img {
    margin-left: 1rem;
  }
  svg {
    height: 2.5rem;
    width: 2.5rem;
    fill: var(--color-white);
    margin-right: 1rem;
  }
`;
const IconContainer = styled.span`
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: var(--font-icon);
`;

const DocTitle = styled.span`
  color: var(--text-secodary-white);
  span {
    color: var(--bg-button);
  }
`;

export {
  StyledNav,
  NavFixed,
  NavResponsive,
  NavResponsiveTitle,
  Img,
  Ul,
  StyledLi,
  DocTitle,
  IconContainer,
};
