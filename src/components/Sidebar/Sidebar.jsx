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
                <NavLink exact={true} to={"/home"} className={(navData) => navData.isActive ? "selected" : null}> <span><HomeIcon />Home</span></NavLink>
                <NavLink to={"/explore"} className={(navData) => navData.isActive ? "selected" : null}><span><SearchIcon />Explore</span></NavLink>
                <NavLink to={"/message"} className={(navData) => navData.isActive ? "selected" : null}><span><MailOutlineIcon />Message</span></NavLink>
                <NavLink to={"/notifications"} className={(navData) => navData.isActive ? "selected" : null}><span><NotificationsNoneIcon />Notifications</span></NavLink>
                <NavLink to={"/bookmarks"} className={(navData) => navData.isActive ? "selected" : null}><span><BookmarkBorderIcon />Bookmarks</span></NavLink>
                <NavLink to={"/lists"} className={(navData) => navData.isActive ? "selected" : null}><span><ListAltIcon />Lists</span></NavLink>
                <NavLink to={"/profile"} className={(navData) => navData.isActive ? "selected" : null}><span><PermIdentityIcon />Profile</span></NavLink>
                <NavLink to={"/more"} className={(navData) => navData.isActive ? "selected" : null}><span><MoreHorizIcon />More</span></NavLink>

            </nav>

            <button type="button" className="sidebar-tweet">Tweet</button>


            <footer>
                <button className="account">
                    <div className="photo">
                        <img className="img2"
                            alt=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHRdU5gCDtbkmHD7UE7uzMhCgB7w4SvYvNFqpN5YW9KM9exAzb_3qq7o0edETrSp0ZdQA&usqp=CAU"
                        />
                    </div>
                    <div>
                        <div className="name">{user.displayName}</div>
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