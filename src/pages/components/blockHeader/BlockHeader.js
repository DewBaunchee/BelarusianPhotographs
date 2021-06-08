import './BlockHeader.css'

const BlockHeader = (props) => {
    return (
        <div className="header-container">
        <h1 className="header">
            {props.value}
        </h1>
        <hr className="horizontal-line"/>
    </div>);
}

export default BlockHeader;