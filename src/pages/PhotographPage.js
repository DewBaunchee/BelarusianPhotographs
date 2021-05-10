import {Col, Row} from "react-bootstrap";
import BlockHeader from "./components/BlockHeader";
import './styles/PhotographPage.css'
import CustomButton from "./components/CustomButton";
import CustomTimeLine from "./components/CustomTimeLine";
import {Map, Placemark, YMaps} from "react-yandex-maps";
import YouTube from "react-youtube";
import {useTranslation} from "react-i18next";
import CustomGallery from "./components/CustomGallery";

const PhotographPage = (props) => {
    const {t} = useTranslation();
    const photographs = t("photographsInfo");

    const getPhotographInfo = (id) => {
        for (let i = 0; i < photographs.length; i++) {
            if (photographs[i].id === id) {
                return photographs[i];
            }
        }
        return null;
    };

    const photographInfo = getPhotographInfo(props.match.params.id);
    if (!photographInfo) {
        return (
            <div>
                <Row className={"justify-content-center"}>
                    <Col style={{
                        textAlign: "center",
                        margin: 0,
                        padding: "50px",
                        fontSize: "30px"}}
                    >
                        {t("notFound")}
                    </Col>
                </Row>
            </div>
        );
    }

    return (
        <div>
            <div className="row photograph-info-container">
                <Row>
                    <Col md={"6"}>
                        <img className="img-fluid" src={photographInfo.mainImage}
                             alt="Photograph of the day"/>
                    </Col>
                    <Col className="photograph-info-article">
                        <h2 className="photograph-info-article-header">
                            {photographInfo.name}
                        </h2>
                        <h6 className="photograph-info-article-birthday">
                            {photographInfo.birthday}
                        </h6>
                        <p className="photograph-info-article-text">
                            {photographInfo.details}
                        </p>
                    </Col>
                </Row>
            </div>

            <div className="row gallery-container">
                <BlockHeader className="gallery-header" value={t("galleryTitle")}/>
                <CustomGallery photos={photographInfo.gallery}/>
                <Row className="justify-content-center mt-3">
                    <Col className="justify-content-center" lg="2" sm="4">
                        <CustomButton value={t("viewAll")} className="gallery-button"/> {/* TODO delete*/}
                    </Col>
                </Row>
            </div>

            <div className="row timeline-container">
                <BlockHeader value={t("timelineTitle")}/>
                <CustomTimeLine items={photographInfo.timeline}/>
            </div>

            <div className="row map-container justify-content-center">
                <BlockHeader value={t("workPlaceTitle")}/>
                <Col lg={"10"} style={{height: "500px"}}>
                    <YMaps>
                        <Map
                            defaultState={{
                                center: [photographInfo.map.x, photographInfo.map.y],
                                zoom: 9
                            }}
                            width="100%"
                            height="100%">
                            <Placemark geometry={[photographInfo.map.x, photographInfo.map.y]}/>
                        </Map>
                    </YMaps>
                </Col>
            </div>

            <div className="row video-container justify-content-center">
                <BlockHeader value={t("videoAboutTitle")}/>
                <Col lg={"10"}>
                    <YouTube
                        videoId={photographInfo.videoId}
                        opts={{
                            height: "500px",
                            width: "100%"
                        }}
                    />
                </Col>
            </div>
        </div>
    );
}

export default PhotographPage;