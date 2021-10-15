
import React, {useState} from "react";
import '../../assets/styles/global.scss';
import send_icon from '../../assets/icons/send_icon.svg';
import emoji from '../../assets/icons/emoji.svg';
import link from '../../assets/icons/link.svg';
import axios from 'axios'
const ChatFooter = () => {
    const [message, setMessage] = useState('')
    const sendMessage = async () => {
        const baseUrl = 'http://stormy-sierra-19463.herokuapp.com'
        const apiVersion = 'api/v1'
        const entity = 'chat'
        const endPoint = `${baseUrl}/${apiVersion}/${entity}/usermessage`
        const chat = JSON.parse(localStorage.getItem('chat'))
        const chatId = chat[0]._id
        const email = localStorage.getItem('userEmail')
        try {
            const response = await axios.post(endPoint, { email, chatId, message })
            console.log("response", response)
            console.log(response.status)
        } catch (e) {
            console.log(e);
        }
    }

return(
        <div className=" border-t border-blue-500 rounded-br-lg rounded-bl-lg p-2">
            <div className="inner_container flex justify-center ">
            <div className="input_container">
            <input className="outline-none" type="text" placeholder="Type here..." onChange={(e) => { setMessage(e.target.value) }}/>
            </div>
            <div className="icon_container flex justify-evenly ">
            <div className="footer-divs">
            <img src={link} alt="" />
            </div>
            <div className="footer-divs">
            <img src={emoji} alt="" />               
            </div>
            <div className="footer-divs">
            <img src={send_icon} alt="" onClick={() => sendMessage()}/>
            </div>
            </div>
            </div>
        </div>

);
}

export default ChatFooter;