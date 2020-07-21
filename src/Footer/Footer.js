import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";


const Footer = (props) => {
   
    const renderFooter = () => {
        let footerData = [];
        props.footer.forEach((data, i) => {
            footerData.push(
                <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6 main-footer__block" key={i}>
                    <div className="title">{data.footerTitle}</div>
                    <div>{data.footerContent}</div>
                    <Link to={data.footerLink}>{data.footerLinkTitle}</Link>
                </div>
            )
        })
        return (footerData)
    }

    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {renderFooter()}
                </div>
            </div>
            <div className="main-footer__menu"></div>
        </div>
    )
}

export default Footer;