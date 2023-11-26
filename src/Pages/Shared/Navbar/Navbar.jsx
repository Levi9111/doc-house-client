import UlElements from "./UlElements";
import { css, styled } from "styled-components";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import {
  DocTitle,
  NavFixed,
  NavResponsive,
  NavResponsiveTitle,
  StyledNav,
  IconContainer,
} from "./NavStyles";
import DocIcon from "../../../assets/icons/DocIcon";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("/"); // Track the current section

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top when logo or navbar button is clicked
  function scrollToTop() {
    animateScroll.scrollToTop();
  }
  return (
    <StyledNav isActive={scrolled}>
      <FixedNav
        scrolled={scrolled}
        scrollToTop={scrollToTop}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      <ResponsiveNav
        scrolled={scrolled}
        scrollToTop={scrollToTop}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </StyledNav>
  );
}

function FixedNav({
  scrolled,
  currentSection,
  setCurrentSection,
  scrollToTop,
}) {
  return (
    <NavFixed isActive={scrolled}>
      <IconContainer onClick={scrollToTop}>
        <DocIcon />
        <DocTitle>
          <span>Doc</span> House
        </DocTitle>
      </IconContainer>
      <UlElements
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </NavFixed>
  );
}

function ResponsiveNav({
  scrolled,
  currentSection,
  setCurrentSection,
  scrollToTop,
}) {
  const [active, setActive] = useState(false);

  const NavResponsiveElements = styled.div`
    background: var(--bg-primary);
    width: 100%;
    position: absolute;
    ${active
      ? css`
          top: 10rem;
        `
      : css`
          top: -25rem;
        `}
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-white);
    padding: 5.2rem 0 0 0;
    transition: all 0.4s;
  `;

  function handleActive() {
    setActive(!active);
  }

  return (
    <NavResponsive isActive={scrolled}>
      <NavResponsiveTitle>
        {/* <Img src={logo} alt="Logo" onClick={scrollToTop} /> */}
        <IconContainer onClick={scrollToTop}>
          <DocIcon />
          <DocTitle>
            <span>Doc</span> House
          </DocTitle>
        </IconContainer>
        <span onClick={handleActive}>{active ? <FaTimes /> : <FaBars />}</span>
      </NavResponsiveTitle>
      <NavResponsiveElements>
        <UlElements
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      </NavResponsiveElements>
    </NavResponsive>
  );
}

export default Navbar;
