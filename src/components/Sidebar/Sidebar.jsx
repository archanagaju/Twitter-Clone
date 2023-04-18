import "./Sidebar.css";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
//import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { myContext } from "../../App";


const Sidebar = () => {

    const navigate = useNavigate();
    const { logOut } = useContext(myContext);
    const user = JSON.parse(localStorage.getItem('userDetails'))
    const handleClick = () => {
        logOut();
        navigate('/')
    }

    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar-twitterIcon" />
            <nav>
                <NavLink exact={true} to={"/home"} className={(navData) => navData.isActive ? "selected" : null}> <span className="side"><HomeIcon />Home</span></NavLink>
                <NavLink to={"/explore"} className={(navData) => navData.isActive ? "selected" : null}><span className="side"><SearchIcon />Explore</span></NavLink>
                <NavLink to={"/message"} className={(navData) => navData.isActive ? "selected" : null}><span className="side"><MailOutlineIcon />Message</span></NavLink>
                <NavLink to={"/notifications"} className={(navData) => navData.isActive ? "selected" : null}><span className="side"><NotificationsNoneIcon />Notifications</span></NavLink>
                <NavLink to={"/bookmarks"} className={(navData) => navData.isActive ? "selected" : null}><span className="side"><BookmarkBorderIcon />Bookmarks</span></NavLink>
                <NavLink to={"/lists"} className={(navData) => navData.isActive ? "selected" : null}><span className="side"><ListAltIcon />Lists</span></NavLink>
                <NavLink to={"/profile"} className={(navData) => navData.isActive ? "selected" : null}><span className="side"><PermIdentityIcon />Profile</span></NavLink>
                <NavLink to={"/more"} className={(navData) => navData.isActive ? "selected" : null}><span className="side"><MoreHorizIcon />More</span></NavLink>

            </nav>

            <button type="button" className="sidebar-tweet">Tweet</button>


            <footer>
                <button className="account">
                    <div className="photo">
                        <img className="img2"
                            alt=""
                            src="https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg?w=2000"
                        />
                    </div>
                    <div>
                        <div className="name">Username:{user.displayName}</div>
                        <div className="username">@{user.displayName}</div>
                    </div>
                </button>
                <div className="logout">
                    <button onClick={handleClick}>Logout</button>
                </div>
            </footer>
        </div>
    );
};

export default Sidebar;