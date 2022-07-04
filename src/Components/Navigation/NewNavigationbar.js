import { NavDropdown } from "react-bootstrap";
import "./Navigationbar.css";

const NewNavigationbar = (props) => {
  return (
    <NavDropdown
      className="navcolor"
      title={props.NewNavigationKey}
      id="navbarScrollingDropdown" 
    >
      {Object.entries(props.NewNavigationValue).map(([index, value]) => {
        return (
          <NavDropdown.Item href="#" key={index}>
            {value}
          </NavDropdown.Item>
        );
      })}
    </NavDropdown>
  );
};

export default NewNavigationbar;
