import './PhotographPane.css'

const PhotographPane = (props) => {
    return (
        <div className="container">
            <div className="image" style={{backgroundImage: `url(${props.image})`}}/>
            <p className="name">{props.name}</p>
        </div>
    );
}

export default PhotographPane;