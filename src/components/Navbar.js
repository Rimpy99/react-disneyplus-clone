import "./Navbar.css"
import { useState } from "react";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

//react-icons
import { AiFillHome, AiFillStar } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { RiMovie2Fill } from "react-icons/ri";
import { BsDisplayFill, BsThreeDotsVertical, BsPlusLg } from "react-icons/bs";

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

const dropdownVariants = {
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
    const [areDotsOnHover, setAreDotsOnHover] = useState(false);

    return(
        <div className="nav-container">
            <div className="navigation">
                <Link to="/"><img src={require("./../assets/images/disney-logo.png")} alt="disney logo" className="logo"/></Link>
                <ul className="nav-list">
                    <li>
                        <Link to="/" className="nav-link">
                            <div className="nav-icon">
                                <AiFillHome/>
                            </div>
                            <p className="nav-page-title nav-page-title-first">HOME</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/search" className="nav-link">
                            <div className="nav-icon">
                                <FiSearch/>
                            </div>
                            <p className="nav-page-title">SEARCH</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/watchlist" className="nav-link">
                            <div className="nav-icon">
                                <BsPlusLg/>
                            </div>
                            <p className="nav-page-title">WATCHLIST</p>
                        </Link>
                    </li>
                    <li className="hidden-in-responsive">
                        <Link to="/originals" className="nav-link">
                            <div className="nav-icon">
                                <AiFillStar/>
                            </div>
                            <p className="nav-page-title">ORIGINALS</p>
                        </Link>
                    </li>
                    <li className="hidden-in-responsive">
                        <Link to="/movies" className="nav-link">
                            <div className="nav-icon">
                                <RiMovie2Fill/>
                            </div>
                            <p className="nav-page-title">MOVIES</p>
                        </Link>
                    </li>
                    <li className="hidden-in-responsive">
                        <Link to="/series" className="nav-link">
                            <div className="nav-icon">
                                <BsDisplayFill/>
                            </div>
                            <p className="nav-page-title">SERIES</p>
                        </Link>
                    </li>
                    <li className="hidden-out-of-responsive">
                        <div 
                            className="nav-icon"
                            onMouseOver={()=>setAreDotsOnHover(true)} 
                            onMouseOut={()=>setAreDotsOnHover(false)}
                        >
                            <div className="nav-icon-dots">
                                <BsThreeDotsVertical color={"white"} size={20}/>
                            </div>
                            <AnimatePresence>
                                {areDotsOnHover && 
                                    <motion.div 
                                        className="nav-dropdown"
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit={{opacity: 0}}
                                    >
                                        <span>
                                            <Link to="/originals" className="nav-dropdown-item">
                                                <div className="nav-icon">
                                                    <AiFillStar color={"white"}/>
                                                </div>
                                                <p className="nav-page-title-res">ORIGINALS</p>
                                            </Link>
                                        </span>
                                        <span>
                                            <Link to="/movies" className="nav-dropdown-item">
                                                <div className="nav-icon">
                                                    <RiMovie2Fill color={"white"}/>
                                                </div>
                                                <p className="nav-page-title-res">MOVIES</p>
                                            </Link>
                                        </span>
                                        <span>
                                            <Link to="/series" className="nav-dropdown-item">
                                                <div className="nav-icon">
                                                    <BsDisplayFill color={"white"}/>
                                                </div>
                                                <p className="nav-page-title-res">SERIES</p>
                                            </Link>
                                        </span>
                                    </motion.div>
                                }
                            </AnimatePresence>
                        </div>
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