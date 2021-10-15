import React,{ useState, useEffect } from "react";
import ChatHead from "../chatbot-head";
import ChooseOption1 from "../select-options";
import ChatFooter from "../chatbot-footer";
import BotDialogues1 from "../bot-Dialogues";
import messageicon from "../../assets/icons/message-icon.svg";
import '../../assets/styles/global.scss';
import './index.css';
import axios from 'axios'
import { io } from "socket.io-client";
const MessageScreen = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [chat , setChat] = useState([]);
  const ENDPOINT = "http://localhost:3000";
  
  useEffect(() => {
    const socket = io(ENDPOINT);
    const fetchChats = async () => {
      const baseUrl = 'http://stormy-sierra-19463.herokuapp.com'
      const apiVersion = 'api/v1'
      const entity = 'chat'
      const endPoint = `${baseUrl}/${apiVersion}/${entity}/user`
      const email = localStorage.getItem('userEmail');
      if( email ){
        const response = await axios.post(endPoint, { email })
        console.log("response", response)
        console.log(response.status)
        if (response.status == 200) {
          setChat(response.data.chat[0].messages);
          localStorage.setItem("chat" , JSON.stringify(response.data.chat[0]))
          console.log(response.data.chat[0].messages);
        }
      }
      
    }
    fetchChats()
  }, [axios, setChat])
  const renderChat = (chat) => {
    return chat.map((message) => {
      return  <div className={`message-main ${message.senderName == 'furqan'?   'reciever':'sender'}`}>
                <div className="d-flex align-items-start comment">
                  <div className="comment_item">
                    <span className="comment_desc">{message.message}</span>
                  </div>
                </div>
              </div>
    })
  }
  return (
    <div className="complete_bot second_screen_size">
        <>
          <div className=" border border-blue-400 rounded-lg">
            <ChatHead />
            <div className="message_body" style={{height:"450px"}}>
              {renderChat(chat)}
            </div>
            <ChatFooter />
          </div>
        </>
      <div className="chat_icon">
  <img onClick={() => setChat(!chat)} src={messageicon} alt="" />
</div>
    </div>
  );
};

export default MessageScreen;
