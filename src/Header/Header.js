import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";


const Header = (props) => {
    
    const headerMenu = () =>{
        let menu = []
        props.nav.forEach((data, i) => {
            menu.push(<li key={i} className="nav-li"><Link to={data.link}>{data.linkName}</Link></li>)
        });
        return(menu)
    };

    return (
        <div className="main-header">
            <nav>
                <ul>
                    {headerMenu()}
                </ul>
            </nav>

        </div>
    )
}

export default Header;

