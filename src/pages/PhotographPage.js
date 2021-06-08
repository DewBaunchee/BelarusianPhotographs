import {Col, Row} from "react-bootstrap";
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {useTranslation} from "react-i18next";
import YouTube from "react-youtube";
import BlockHeader from "./components/blockHeader/BlockHeader";
import CustomTimeLine from "./components/timeline/CustomTimeLine";
import CustomGallery from "./components/gallery/CustomGallery";
import './styles/PhotographPage.css'

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
            <Row>
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
            </Row>
        );
    }

    return (
        <Row>
            <Row className="photograph-info-container">
                <Row>
                    <Col md={"6"}>
                        <img className="img-fluid col-12" src={photographInfo.mainImage}
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
            </Row>

            <Row className="gallery-container">
                <BlockHeader className="gallery-header" value={t("galleryTitle")}/>
                <CustomGallery photos={photographInfo.gallery}/>
            </Row>

            <Row className="timeline-container">
                <BlockHeader value={t("timelineTitle")}/>
                <CustomTimeLine items={photographInfo.timeline}/>
            </Row>

            <Row className="map-container justify-content-center">
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
            </Row>

            <Row className="video-container justify-content-center">
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
            </Row>
        </Row>
    );
}

export default PhotographPage;