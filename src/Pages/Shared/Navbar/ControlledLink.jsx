import { Link } from "react-router-dom";
import { Link as ReactScrollLink } from "react-scroll";

function ControlledLink({ to, children, onCurrentSection }) {
  function handleSectionChange(section) {
    onCurrentSection(section);
  }

  // return (
  //   <ReactScrollLink
  //     to={to}
  //     smooth={true}
  //     duration={500}
  //     offset={-50}
  //     spy={true}
  //     activeClass="active"
  //     onSetActive={() => handleSectionChange(to)}
  //   >
  //     {children}
  //   </ReactScrollLink>
  // );
  return <Link to={to}>{children}</Link>;
}

export default ControlledLink;
