import {Button} from "react-bootstrap";
import './CustomButton.css'

const CustomButton = (props) => {
    return(
        <Button className="button">
            {props.value}
        </Button>
    );
}

export default CustomButton;