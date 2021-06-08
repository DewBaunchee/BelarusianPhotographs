import './styles/SearchPage.css'
import {Col, Form, Row} from "react-bootstrap";
import PhotographPane from "./components/photographPane/PhotographPane";
import {Link} from "react-router-dom";
import {useState} from "react";

const SearchPage = (props) => {
    const [search, setSearch] = useState();
    if (search === undefined)
        setSearch(props.match.params.name ? props.match.params.name : "")

    const t = props.translation;
    const photographs = t("photographsInfo");

    const getPhotographsPanes = (name) => {
        let matchingNames = [];
        if (name) {
            for (let i = 0; i < photographs.length; i++) {
                if (photographs[i].name.toLowerCase().indexOf(name.toLowerCase()) > -1)
                    matchingNames.push(photographs[i]);
            }
        } else {
            matchingNames = photographs;
        }

        return matchingNames.map((item) =>
            <Col xl="3" lg="4" md="6" className="photograph-container">
                <Link to={"/photograph/" + item.id} style={{textDecoration: "none", color: "#2B3138"}}>
                    <PhotographPane image={item.mainImage} name={item.name}/>
                </Link>
            </Col>
        );
    }

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <Row>
            <Row className="searching-container justify-content-center">
                <Col md={"8"} sm={"10"} className="p-4">
                    <Row>
                        <h1 className="searching-header">
                            {t("searchingHeader")}
                        </h1>
                    </Row>
                    <Row style={{padding: 0}}>
                        <Col>
                            <Form.Control value={search} onChange={handleChange}
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
                {getPhotographsPanes(search)}
            </Row>
        </Row>
    );
}

export default SearchPage;