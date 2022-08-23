import "./Details.css";
import { HiPlusSm } from "react-icons/hi";
import { BsPlayFill } from "react-icons/bs";

const Details = () => {
    return(
        <div className="details-container">
            <div className="details-background">
                <img 
                    src={require("./../../../assets/images/home-images/details/ba-bg.jpg")} 
                    className="details-img details-img-fade-bottom details-img-fade-left"
                />
                <div className="details-content-inner-shadow shadow-left"/>
                <div className="details-content-inner-shadow shadow-bottom"/>
            </div>
            <div className="details-content">
                <h1 className="details-content-title">BUZZ ASTRAL</h1>
                <div className="details-content-btns">
                    <button className="details-content-btn-watch">
                        <BsPlayFill   size="30"/>
                        <span className="details-content-btn-watch-text">PLAY</span>
                    </button>
                    <div className="details-contetn-btn-add-container">
                        <div className="details-content-btn-add">
                            <HiPlusSm size="30" className="details-content-btn-add-plus"/>
                        </div>
                    </div>
                </div>
                <div className="details-content-desc">DESCRIPTION</div>
            </div>
        </div>
    )  
}

export default Details;