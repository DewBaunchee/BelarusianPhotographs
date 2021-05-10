import './styles/SearchPage.css'
import {Col, Form, Row} from "react-bootstrap";
import PhotographPane from "./components/PhotographPane";
import {Component} from "react";
import {Link} from "react-router-dom";

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {search: props.match.params.name ? props.match.params.name : ""};
    }

    render() {
        const t = this.props.translation;

        const photographs = t("photographsInfo");

        const getPhotographsPanes = (photographs, name) => {
            const matchingNames = [];
            for (let i = 0; i < photographs.length; i++) {
                if (photographs[i].name
                    .toLowerCase()
                    .indexOf(name.toLowerCase()) > -1)
                    matchingNames.push(photographs[i]);
            }

            return matchingNames.map((item) =>
                <Link to={"/photograph/" + item.id} style={{textDecoration: "none", color: "#2B3138"}}>
                    <Col xl="3" lg="4" md="6" className="photograph-container">
                        <PhotographPane image={item.mainImage} name={item.name}/>
                    </Col>
                </Link>
            );
        }

        const handleChange = (event) => {
            this.setState({search: event.target.value});
        }

        return (
            <div>
                <Row className="searching-container justify-content-center">
                    <Col md={"8"} sm={"10"} className="p-4">
                        <Row>
                            <h1 className="searching-header">
                                {t("searchingHeader")}
                            </h1>
                        </Row>
                        <Row style={{padding: 0}}>
                            <Col>
                                <Form.Control value={this.state.search ? this.state.search : ""} onChange={handleChange}
                                              className={"search-input mb-sm-0"} type={"text"}
                                              placeholder={t("searchingTextInputPlaceholder")}/>
                            </Col>
                            {/*<Col sm={"3"}>
                                <Form.Control className={"search-button"} type={"submit"} value={t("searchingButton")}/>
                            </Col>*/}
                        </Row>
                    </Col>
                </Row>

                <Row className="photographs">
                    {getPhotographsPanes(photographs, this.state.search)}
                </Row>
            </div>
        );
    }
}

export default SearchPage;