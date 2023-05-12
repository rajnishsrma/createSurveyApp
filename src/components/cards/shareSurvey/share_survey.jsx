import React from "react";
import './sharesurvey.css';

export default function ShareSurvey(){
    return <div>
         <div className="card-wrapper">
            <div className="card2">

                <div className="card-txt">
                    <div className="heading">share servey form with </div>
                    <div className="cross-btn"><img src="../../../../public/assets/close@2x.png" alt="" /></div>
                    
                </div>
                <hr />

                <div className="input-item" id="form-input">
                    <label htmlFor="people">People</label>
                    <input type="text" className="people-text" placeholder="Add more people" id="people" />
                    <a  href="form-input">add email</a>
                </div>
                <hr />

                <div className="btns">
                    <button type="cancel" className="cancel-btn">CANCEL</button>
                    <button type="submit" className="share-btn">SHARE</button>
                </div>
            </div>
        </div>
    </div>
}