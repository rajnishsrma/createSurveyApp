import React from "react";
import './sidebar.css';
import mysurvey from '../../assets/my_surveys@2x.png';
import requestedsurvey from '../../assets/requested_surveys@2x.png';
import mysurveyInactive from '../../assets/my_surveys_inactive@2x.png';
import requestedsurveyInactive from '../../assets/requested_surveys_inactive@2x.png';

export default function Sidebar(){
    function changeicon(e){
       var img = document.getElementById('requstesurvey')
       img.src = '../../assets/requested_surveys@2x.png';
    }
    
    return <div>
        <div className="sidebar-container">
            <div className="survey-head">Survey</div>
       
            <hr/>

            <div className="middle">
                <div className="menu-options">
                    <div className="opt1">
                        <img id="mysurvey" src={mysurveyInactive} alt=""  />
                        <h3>My Survey</h3>
                    </div>
                    <div className="opt2">
                        <img id="requstesurvey" src={require('../../assets/requested_surveys_inactive@2x.png')} alt="" onClick={changeicon} />
                        <h3>Requested Survey</h3>
                    </div>
                </div>

                <div className="quote">
                    <p>"Hard work will pay off later, laziness"</p>
                    <h4>- Adam Smith</h4>
                </div>
            </div>
       </div>
    </div>
}