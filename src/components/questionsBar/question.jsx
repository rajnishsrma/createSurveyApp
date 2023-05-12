import React from "react";
import './questions.css';

export default function QuestionBar(){

    return <div>
        <div className="ques-container">
            <div className="title">
                <h2>QUESTIONS LIST</h2>
            </div>
            <hr />

            <div className="que">
                <p>what is my biggest strength  <img src={require('../../assets/close@2x.png')} alt="" /></p>
            </div>
        </div>
    </div>
}