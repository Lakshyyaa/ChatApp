import React from "react";
import './InfoBar.css'
function InfoBor() {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img alt="lefticon" src={onlineIcon} className='onlineIcon'/>
                <h3>roomname</h3>
            </div>
            <div className="rightInnerContainer">
            </div>
        </div>
    )
}
export default InfoBor