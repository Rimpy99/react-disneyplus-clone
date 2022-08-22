import "./Details.css";

const Details = () => {
    return(
        <div className="details-container">
            <div className="details-content">
                <img src={require("./../../../assets/images/home-images/details/ba-bg.jpg")} className="details-img"/>
            </div>
            <div className="details-footer"/>
        </div>
    )  
}

export default Details;