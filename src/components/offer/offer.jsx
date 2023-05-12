import React from "react";
import './offer.css';

export default function Offer(){
    return <div>
        <div className="offer-container">
            <div className="texts">
                <p>Create or Answer <strong>10</strong> servey & earn 
                </p>
                <img className="coin" src={require('../../assets/group-16@2x.png')} alt="" />
                <span className="amt">200</span>

                <img className="girl-red" src={require('../../assets/girl_red@2x.png')} alt="" />

                <img className="close" src={require('../../assets/close_inactive@2x.png')} alt="" />
            </div>
        </div>
    </div>
}