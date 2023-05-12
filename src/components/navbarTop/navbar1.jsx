import React from "react";
import './navbar1.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import man from '../../assets/manager-5@2x.png';
import dolleri from '../../assets/group-16@2x.png';
import { faAngleDown, faArrowDown, faBell, faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function Navbar1(){
    return <div>
        <div className="nav-container">
            <ul >
                <li className="nav-itm">learn   <FontAwesomeIcon icon={faAngleDown} className="down-icon"/></li>
                <li className="nav-itm">network   <FontAwesomeIcon icon={faAngleDown} className="down-icon"/></li>
                <li className="nav-itm">evaluate   <FontAwesomeIcon icon={faAngleDown} className="down-icon"/></li>
                <li className="nav-itm">jobs</li>

                <div className="vertical"></div>

                <li className="nav-itm-score">
                    <div className="score">
                        <div className="score-icon">
                            <img src={man} alt="" />
                        </div>
                    
                        <div className="score-text">
                            <h3>1325</h3>
                            <h4>profile score</h4>
                        </div>
                    
                    </div>
                </li>

                <div className="vertical"></div>

                <li className="nav-itm-token">

                    <div className="token">

                        <div className="token-icon">
                            <img src={dolleri} alt="" />
                        </div>

                        <div className="token-text">
                            <h3>400</h3>
                            <h4>tokens</h4>
                        </div>
                       
                    </div>
                </li>

                <div className="vertical"></div>

                <li className="nav-itm-cicon">
               <FontAwesomeIcon icon={faCalendar} size="xl"/>
                    {/* <img src="" alt="calender" /> */}
                </li>

                <div className="vertical"></div>

                <li className="nav-itm-bicon">
                    <FontAwesomeIcon icon={faBell} size="xl" />
                    {/* <img src="" alt="bell" /> */}
                </li>

                <div className="vertical"></div>

                <li className="nav-itm-profile">
                    <img src={man} alt="profile" />
                    <h3>sangeeta</h3>
                    <FontAwesomeIcon icon={faAngleDown} className="down-icon"/>
                </li>
            </ul>
        </div>
    </div>
}