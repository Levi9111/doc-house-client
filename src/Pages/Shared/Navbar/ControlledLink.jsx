import { Link as ReactScrollLink } from "react-scroll";

function ControlledLink({ to, children, onCurrentSection }) {
  function handleSectionChange(section) {
    onCurrentSection(section);
  }

  return (
    <ReactScrollLink
      to={to}
      smooth={true}
      duration={500}
      offset={-50}
      spy={true} // Activate spy behavior to track the active section
      activeClass="active" // Set the class name for the active section
      onSetActive={() => handleSectionChange(to)}
    >
      {children}
    </ReactScrollLink>
  );
}

export default ControlledLink;
