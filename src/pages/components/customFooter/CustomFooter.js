import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import './CustomFooter.css'
import {useTranslation} from "react-i18next";

const CustomFooter = () => {
    const { t } = useTranslation();

    return (
        <div className="row">

            <div className="row">
                <hr style={{marginBottom: 0}}/>
            </div>
            <div className="row justify-content-center">
                <Col lg={"8"} md={"10"}>
                    <Row>
                        <Link className="col bottom-link"
                              to={"/"}>
                            {t("home")}
                        </Link>
                        <Link className="col bottom-link"
                              to={"/search"}>
                            {t("photographs")}
                        </Link>
                        <Link className="col bottom-link"
                              to={"/photographOfTheDay"}>
                            {t("photographOfTheDay")}
                        </Link>
                    </Row>
                </Col>
            </div>

            <div className="row">
                <hr style={{marginTop: 0}}/>
            </div>
            <div className="row justify-content-center">
                &#169; {t("allRightsReserved")}
            </div>

        </div>
    );
}

export default CustomFooter;