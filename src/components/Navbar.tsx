import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
import { SidebarData } from './SidebarData';
import "../styles/Navbar.css";
import { IconContext } from 'react-icons';
import { Avatar } from 'antd';
function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar)
    }
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <span className="headingText">
                        Task Tracker
                        </span>
                        <span style={{marginLeft: '83%'}}>
                        <Avatar size="large" icon={<UserOutlined />} />
                        Task Tracker
                        </span>
                        

                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggel">


                        </li>
                        {
                            SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path} >
                                            <span className="listItem">
                                                {item.title}
                                            </span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
