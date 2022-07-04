import { InputGroup, FormControl, Button } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import "./Searchbox.css";

const Searchbox = () => {
  return (
    <InputGroup className="rounded searchbox-size">
      <FormControl
        className="border-none"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon2"
      />
      <Button className="border-none" variant="danger" id="button-addon2">
        <SearchIcon />
      </Button>
    </InputGroup>
  );
};

export default Searchbox;
