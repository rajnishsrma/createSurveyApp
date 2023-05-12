import React from "react";
import './mysurvey.css';
import image from '../../../assets/my_surveys_grid@2x.png'
import dateimg from '../../../assets/my_surveys@2x.png';

export default function MySurvey(){
    return <div className="mysurvey-wrapper">
        <div className="container-mysurvey">
            <div className="mysurvey-img">
                <img src={image} alt="" />
            </div>

            <div className="title">Career-Skill feedback</div>

            <div className="date-icon">
                <img className="dicon" src={dateimg} alt="" />
                <h3>11 Mar 2020</h3>
                <img  className="option-icon" src={dateimg} alt="" />
            </div>

            <div className="mysurvey-btn">
                <button>VIEW RESPONSE</button>
            </div>
        </div>
    </div>
}