import {Col, Row} from "react-bootstrap";

const CustomGallery = (props) => {
    const photos = props.photos;
    const defaultImage = "https://stockcars.continentalcars.co.nz/wp-content/uploads/sites/5/CON1009_155819_1.jpg?w=189&h=undefined&undefined&undefined&auto=compress,format";
    if (!photos) return (<div>Error</div>);
    
    const getPhoto = (index) => {
        return photos[index] ? photos[index] : defaultImage;
    };
    
    return (
        <Row>
            <Col className="gallery-image-container">
                <img src={getPhoto(0)} alt=""/>
            </Col>
            <Col>
                <Row>
                    <Col className="gallery-image-container">
                        <img src={getPhoto(1)} alt=""/>
                    </Col>
                    <Col className="gallery-image-container">
                        <img src={getPhoto(2)} alt=""/>
                    </Col>
                </Row>
                <Row>
                    <Col className="gallery-image-container">
                        <img src={getPhoto(3)} alt=""/>
                    </Col>
                    <Col className="gallery-image-container">
                        <img src={getPhoto(4)} alt=""/>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default CustomGallery;