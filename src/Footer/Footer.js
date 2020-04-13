import React from 'react';
import './Footer.css';

const Footer = (props) => {

    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {props.renderFooter()}
                </div>
            </div>
            <div className="main-footer__menu"></div>
        </div>
    )
}

export default Footer;