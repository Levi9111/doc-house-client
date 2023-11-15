import ControlledLink from "./ControlledLink";
import { StyledLi, Ul } from "./NavStyles";

function UlElements({ currentSection, setCurrentSection }) {
  return (
    <Ul>
      <StyledLi isActive={currentSection === "about"}>
        <ControlledLink to="/" onCurrentSection={setCurrentSection}>
          Home
        </ControlledLink>
      </StyledLi>
      <StyledLi isActive={currentSection === "portfolio"}>
        <ControlledLink to="/about" onCurrentSection={setCurrentSection}>
          About
        </ControlledLink>
      </StyledLi>
      <StyledLi isActive={currentSection === "skills"}>
        <ControlledLink to="/appointment" onCurrentSection={setCurrentSection}>
          Appointment
        </ControlledLink>
      </StyledLi>
      <StyledLi isActive={currentSection === "contact"}>
        <ControlledLink to="/login" onCurrentSection={setCurrentSection}>
          login
        </ControlledLink>
      </StyledLi>
    </Ul>
  );
}

export default UlElements;
