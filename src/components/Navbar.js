import "./Navbar.css"
import { useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

//react-icons
import { AiFillHome, AiFillStar } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";
import { RiMovie2Fill } from "react-icons/ri";
import { BsDisplayFill } from "react-icons/bs";

//animation variants
const settingsContainerVariants = {
    hidden: {
        height: 0
    },
    visible: {
        height: "auto",
        transition: {
            duration: ".3",
            type: "ease-in"
        }
    },
}

const settingsVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: ".3",
        }
    }
}

const Navbar = () => {

    const [isProfileOnHover, setIsProfileOnHover] = useState(false);

    return(
        <div className="nav-container">
            <div className="navigation">
                <Link to="/"><img src={require("./../assets/images/disney-logo.png")} alt="disney logo" className="logo"/></Link>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <AiFillHome/>
                            <p className="nav-page-title nav-page-title-first">HOME</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search" className="nav-link">
                            <FiSearch/>
                            <p className="nav-page-title">SEARCH</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/watchlist" className="nav-link">
                            <BsPlusLg/>
                            <p className="nav-page-title">WATCHLIST</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/originals" className="nav-link">
                            <AiFillStar/>
                            <p className="nav-page-title">ORIGINALS</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/movies" className="nav-link">
                            <RiMovie2Fill/>
                            <p className="nav-page-title">MOVIES</p>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/series" className="nav-link">
                            <BsDisplayFill/>
                            <p className="nav-page-title">SERIES</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div 
                className="profile" 
                onMouseOver={()=>setIsProfileOnHover(true)} 
                onMouseOut={()=>setIsProfileOnHover(false)}
            >
                <p>Paul</p>
                <img src={require("./../assets/images/user.jpg")} alt="user" className="user-img"/>
                {isProfileOnHover && 
                    <motion.div 
                        className="settings-container"
                        variants={settingsContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            variants={settingsVariants}
                        >
                            <div className="add-profile-container settings-option">
                                <div className="add-profile-btn">
                                    <BsPlusLg/>
                                </div>
                                Add profile
                            </div>
                            <div className="settings-option">Edit profiles</div>
                            <div className="settings-option">App Settings</div>
                            <div className="settings-option">Account</div>
                            <div className="settings-option">Help</div>
                            <div className="settings-option">Log Out</div>
                        </motion.div>
                    </motion.div>
                }
            </div>
        </div>
    )
}

export default Navbar;