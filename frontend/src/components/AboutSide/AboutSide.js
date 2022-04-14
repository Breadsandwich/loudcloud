import React from "react";

import './AboutSide.css'


const AboutSide = () => {
    return (
        <div className="sidePanel">
            <div className="left">

                <div className='panel_element'>
                    <a href="https://github.com/Breadsandwich" className="footer-icon" target='_blank'>
                    <i className='fab fa-github' />
                    </a>
                </div>

                <div className='panel_element'>
                    <a href="https://www.linkedin.com/in/daniel--thai/" className='footer-icon' target='_blank'>
                    <i className='fab fa-linkedin' />
                    </a>
                </div>
            </div>

            <div className="right">
                <div className="arrow_icon">
                    <i className="fa fa-angle-right" />
                </div>
            </div>
        </div>
    )
}

export default AboutSide
