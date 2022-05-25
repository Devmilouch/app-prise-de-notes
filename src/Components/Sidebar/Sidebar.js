import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import editIcon from "./ImgsSidebar/edit.svg";
import folderIcon from "./ImgsSidebar/folder.svg";
import toolsIcon from "./ImgsSidebar/settings.svg";
import menuIcon from "./ImgsSidebar/menu.svg";
import "./Sidebar.css";
import SideNotes from "../SideNotes/SideNotes";



const Sidebar = (props) => {
    const [ checkWidth, setCheckWidth ] = useState(window.innerWidth);

    const handleCheckWidth = () => {
        setCheckWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleCheckWidth);

        return () => {
            window.removeEventListener("resize", handleCheckWidth);
        }
    }, []);

    const [ toggleNav, setToggleNav ] = useState(false);

    const handleToggleNav = () => {
        setToggleNav(!toggleNav);
    }

    return (
        <>
            {
                checkWidth < 900 && (
                    <button 
                    className="toggle-nav-btn"
                    onClick={handleToggleNav}
                    >
                        <img src={menuIcon} alt="icone menu" />
                    </button>
                )
            }
            <nav className={toggleNav ? "container-sidebar visible-nav" : "container-sidebar"}>
                <div className="sidebar">
                    <div className="three-dots">
                        <div className="dot-nav d-red"></div>
                        <div className="dot-nav d-yellow"></div>
                        <div className="dot-nav d-green"></div>
                    </div>
                    <ul>
                        <Link to="/">
                            <li onClick={() => setToggleNav(false)}>
                                <img src={folderIcon} alt="icone folder" />
                            </li>
                        </Link>
                        <Link to="/edit">
                            <li onClick={() => setToggleNav(false)}>
                                <img src={editIcon} alt="icone edit" />
                            </li>
                        </Link>
                        <Link to="/configuration">
                            <li onClick={() => setToggleNav(false)}>
                                <img src={toolsIcon} alt="icone tools" />
                            </li>
                        </Link>
                    </ul>
                </div>
                <SideNotes handleToggleNav={handleToggleNav} />
            </nav>
        </>
    );
};

export default Sidebar;