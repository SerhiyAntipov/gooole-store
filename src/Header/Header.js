import React from 'react';
import './Header.css';

const Header = (props) => {

    return (
        <div className="main-header">
            <nav>
                <ul>
                    {props.headerMenu()}
                </ul>
            </nav>

        </div>
    )
}

export default Header;

