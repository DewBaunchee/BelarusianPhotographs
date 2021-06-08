import 'bootstrap/';
import {Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {withTranslation} from "react-i18next";

import BlockHeader from "./components/blockHeader/BlockHeader";
import CustomButton from "./components/customButton/CustomButton";

import './styles/MainPage.css'
import DewBauncheeAvatar from './images/dewbaunchee.png'
import GriooolAvatar from './images/grioool.png'
import {useState} from "react";

const MainPage = (props) => {
    const [search, setSearch] = useState();
    if(search === undefined) setSearch("");

    const {t} = props;
    const photographOfTheDayInfo = props.photographOfTheDay;

    return (
        <Row>
            <Row className="about-portal-container">
                <Col xxl={"7"} xl={"8"} lg={"9"} sm={"11"} className="about-portal-article">
                    <h1>{t("aboutPortalHeader")}</h1>
                    <p className="about-portal-text">
                        {t("aboutPortalText")}
                    </p>

                    <Form>
                        <Row>
                            <Col style={{height: "36px"}} md={"9"} sm={"7"} className="mb-2">
                                <Form.Control className="search-input" type={"text"}
                                              placeholder={t("aboutPortalTextInputPlaceholder")}
                                              onChange={(event) => {
                                                  setSearch(event.target.value)
                                              }}
                                />
                            </Col>
                            <Col style={{height: "36px"}} md={"3"} sm={"5"}>
                                <Link to={"/search/" + search}
                                      style={{textDecoration: "none"}}>
                                    <Form.Control className="search-button" type={"submit"}
                                                  value={t("aboutPortalSearchButton")}/>
                                </Link>
                            </Col>
                        </Row>
                    </Form>

                </Col>
            </Row>

            <Row className="photograph-of-the-day-container">
                <BlockHeader value={t("photographOfTheDay")}/>

                <Row>
                    <Col md={"6"} className="align-content-center">
                        <img className="img-fluid col-12" src={photographOfTheDayInfo.mainImage}
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
            </Row>

            <Row className="developers-team-container">
                <BlockHeader value={t("developersTeamHeader")}/>

                <Row className="justify-content-center gx-5 gy-1">
                    <Col xl={"4"} lg={"6"} md={"8"} sm={"10"}>
                        <Link className="team-member-info"
                              to={{pathname: "/dewbaunchee"}} target="_blank">
                            <img
                                className="d-block w-100"
                                src={DewBauncheeAvatar}
                                alt="Member Matvey"/>
                            <p className="team-member-info-name">
                                Matvey Vorivoda
                            </p>
                            <Link className="team-member-info-github"
                                  to={{pathname: "/dewbaunchee"}} target="_blank">
                                https://github.com/DewBaunchee
                            </Link>
                        </Link>
                    </Col>
                    <Col xl={"4"} lg={"6"} md={"8"} sm={"10"}>
                        <Link className="team-member-info"
                              to={{pathname: "/grioool"}} target="_blank">
                            <img
                                className="d-block w-100"
                                src={GriooolAvatar}
                                alt="Member Olga"/>
                            <p className="team-member-info-name">
                                Olga Grigorieva
                            </p>
                            <Link className="team-member-info-github"
                                  to={{pathname: "/grioool"}}
                                  target="_blank">
                                https://github.com/Grioool
                            </Link>
                        </Link>
                    </Col>
                </Row>
            </Row>
        </Row>
    );
}

export default withTranslation()(MainPage);