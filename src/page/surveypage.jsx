import React from "react";
import './surveypage.css';
import SendCard from "../components/cards/sendSurvey/send_survey";
import ShareSurvey from "../components/cards/shareSurvey/share_survey";
import MySurvey from "../components/cards/mySurvey/card_mysurvey";
import Navbar1 from "../components/navbarTop/navbar1";
import Sidebar from "../components/sidebar/sidebar";
import Offer from "../components/offer/offer";
import QuestionBar from "../components/questionsBar/question";

function SurveyPage(){
    return <div>
        <Navbar1 />
        <Sidebar />
        {/* <SendCard /> */}
        {/* <ShareSurvey /> */}
        <MySurvey />
        <Offer />
        <QuestionBar />
    </div>
}

export default SurveyPage;