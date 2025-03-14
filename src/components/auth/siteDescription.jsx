import React from "react";
import logoIcon from "../../assets/crown (1).png";

/**
 * can be witty 👌
 * @returns a container contains some infos of the lotto site
 */
const SiteDescription = () => {
    return (
        <div className="site-description-container">
            <div className="image-container"><img src={logoIcon} alt="logo" className="logo"></img></div>
            <div className="text-description-container">
                <div className="name-container">
                    <h2>Just A Lottery Lmao</h2>
                </div>
                <div className="description-container">
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Augue libero nascetur consequat purus metus bibendum pretium risus. Est morbi hac mus dis netus egestas.</p>
                </div>
            </div>
            <div className="section-button-container">
                <div className="circle-btn-1"></div>
                <div className="circle-btn-2"></div>
                <div className="current-circle-btn"></div>
                <div className="circle-btn-4"></div>
            </div>
        </div>
    )
}

export default SiteDescription;