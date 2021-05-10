import './PhotographPane.css'

const PhotographPane = (props) => {
    return (
        <div className="container">
            <img className="image" src={props.image} alt={props.name}/>
            <p className="name">{props.name}</p>
        </div>
    );
}

export default PhotographPane;