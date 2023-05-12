import React from "react";
import './sendsurvey.css';
import EmojiPicker from "emoji-picker-react";

function SendCard(){
    return <div>
        <div className="card-container">
            <div className="card">
                <div className="emoji">
                   
                    {/* <p>&#128525;</p> */}
                    <img src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvdjQ4MmJhdGNoMi1uaW5nLTAzLnBuZw.png?s=NRuBBRR0GBJbx-K6sJeEHhM4BadWgK8H-PHJF27Z5UY" alt="" />
                </div>

                <div className="card-text">
                    <div className="heading">servey send successfully</div>
                    <div className="txt1">your servey sent successfully to your </div>
                    <div className="txt2">selected connections</div>
                </div>

                <div className="btn">
                    <button>hurray</button>
                </div>
            </div>
        </div>
    </div>
}

export default SendCard;