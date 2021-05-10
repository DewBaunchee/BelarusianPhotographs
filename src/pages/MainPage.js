import 'bootstrap/';
import {Col, Form, Row} from "react-bootstrap";
import './styles/MainPage.css'
import DewBauncheeAvatar from './images/dewbaunchee.png'
import GriooolAvatar from './images/grioool.png'
import {Link} from "react-router-dom";
import BlockHeader from "./components/BlockHeader";
import CustomButton from "./components/CustomButton";
import {Component} from "react";
import {withTranslation} from "react-i18next";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {search: ""};
    }

    render() {
        const {t} = this.props;
        const photographOfTheDayInfo = this.props.photographOfTheDay;

        return (
            <div>
                <div className="about-portal-container">
                    <div className="about-portal-article col-xxl-7 col-xl-8 col-lg-9 col-sm-11">
                        <h1>{t("aboutPortalHeader")}</h1>
                        <p className="about-portal-text">
                            {t("aboutPortalText")}
                        </p>

                        <Form>
                            <Row>
                                <Col style={{height: "36px"}} md={"9"} sm={"7"} className="mb-2">
                                    <Form.Control className="search-input" type={"text"}
                                                  placeholder={t("aboutPortalTextInputPlaceholder")}
                                                    onChange={(event) =>
                                                    {this.setState({search: event.target.value})}}
                                    />
                                </Col>
                                <Col style={{height: "36px"}} md={"3"} sm={"5"}>
                                    <Link to={"/search" + (this.state.search ? "/" + this.state.search : "")}
                                          style={{textDecoration: "none"}}>
                                        <Form.Control className="search-button" type={"submit"}
                                                      value={t("aboutPortalSearchButton")}/>
                                    </Link>
                                </Col>
                            </Row>
                        </Form>

                    </div>
                </div>

                <div className="row photograph-of-the-day-container">
                    <BlockHeader value={t("photographOfTheDay")}/>

                    <Row>
                        <Col md={"6"}>
                            <img className="img-fluid" src={photographOfTheDayInfo.mainImage}
                                 alt="Photograph of the day"/>
                        </Col>
                        <Col className="photograph-of-the-day-article">
                            <h2 className="photograph-of-the-day-article-header">
                                {photographOfTheDayInfo.name}
                            </h2>
                            <h6 className="photograph-of-the-day-article-birthday">
                                {photographOfTheDayInfo.birthday}
                            </h6>
                            <p className="photograph-of-the-day-article-text">
                                {photographOfTheDayInfo.details}
                            </p>
                            <Row className="justify-content-center">
                                <Col xxl={"4"} lg={"6"} sm={"6"} xs={"8"}>
                                    <Link to={"/photograph/" + photographOfTheDayInfo.id}>
                                        <CustomButton className="photograph-of-the-day-article-button"
                                                      value={t("photographOfTheDayMoreDetailsButton")}/>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div className="row developers-team-container">
                    <BlockHeader value={t("developersTeamHeader")}/>

                    <Row className="justify-content-center gx-5 gy-1">
                        <Col xl={"4"} lg={"6"} md={"8"} sm={"10"}>
                            <Link className="team-member-info"
                                  to={{pathname: "https://github.com/DewBaunchee"}} target="_blank">
                                <img
                                    className="d-block w-100"
                                    src={DewBauncheeAvatar}
                                    alt="Member Matvey"/>
                                <p className="team-member-info-name">
                                    Matvey Vorivoda
                                </p>
                                <Link className="team-member-info-github"
                                      to={{pathname: "https://github.com/Grioool"}} target="_blank">
                                    https://github.com/DewBaunchee
                                </Link>
                            </Link>
                        </Col>
                        <Col xl={"4"} lg={"6"} md={"8"} sm={"10"}>
                            <Link className="team-member-info"
                                  to={{pathname: "https://github.com/DewBaunchee"}} target="_blank">
                                <img
                                    className="d-block w-100"
                                    src={GriooolAvatar}
                                    alt="Member Olga"/>
                                <p className="team-member-info-name">
                                    Olga Grigorieva
                                </p>
                                <Link className="team-member-info-github"
                                      to={{pathname: "https://github.com/Grioool"}}
                                      target="_blank">
                                    https://github.com/Grioool
                                </Link>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default withTranslation()(MainPage);