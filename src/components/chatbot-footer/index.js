
import React from "react";
import '../../assets/styles/global.scss';
import send_icon from '../../assets/icons/send_icon.svg';
import emoji from '../../assets/icons/emoji.svg';
import link from '../../assets/icons/link.svg';

const chatFooter = () => {


return(
        <div className=" border-t border-blue-500 rounded-br-lg rounded-bl-lg p-2">
            <div className="inner_container flex justify-center ">
            <div className="input_container">
            <input className="outline-none" type="text" placeholder="Type here..."/>
            </div>
            <div className="icon_container flex justify-evenly ">
            <div className="footer-divs">
            <img src={link} alt="" />
            </div>
            <div className="footer-divs">
            <img src={emoji} alt="" />               
            </div>
            <div className="footer-divs">
            <img src={send_icon} alt="" />
            </div>
            </div>
            </div>
        </div>

);
}

export default chatFooter;