import React from "react";
import './InfoBar.css'
import closeIcon from "../../closeIcon"
import onlineIcon from "../../Icons/onlineIcon"
function InfoBor() {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img alt="lefticon" src={onlineIcon} className='onlineIcon'/>
                <h3>roomName</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img alt="rightIcon" src={closeIcon} /></a>
            </div>
        </div>
    )
}
export default InfoBor