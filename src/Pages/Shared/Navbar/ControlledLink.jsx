import { NavLink } from "react-router-dom";
import { Link as ReactScrollLink } from "react-scroll";

function ControlledLink({ to, children, onCurrentSection }) {
  function handleSectionChange(section) {
    onCurrentSection(section);
  }

  // return (
  // <ReactScrollLink
  // smooth={true}
  // duration={500}
  // offset={-50}
  // spy={true}
  // activeClass="active"
  // onSetActive={() => handleSectionChange(to)}
  // >
  //   {children}
  // </ReactScrollLink>
  // );
  return (
    <NavLink to={to} onClick={(to) => handleSectionChange(to)}>
      {children}
    </NavLink>
  );
}

export default ControlledLink;
