import React,{ useState, useEffect } from "react";
import ChatHead from "../chatbot-head";
import ChooseOption1 from "../select-options";
import ChatFooter from "../chatbot-footer";
import BotDialogues1 from "../bot-Dialogues";
import messageicon from "../../assets/icons/message-icon.svg";
import '../../assets/styles/global.scss';
import axios from 'axios'
const SecondScreen = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [questions , setQuestions] = useState({});
useEffect(() => {
    const fetchQuestions = async () => {
      const baseUrl = 'http://stormy-sierra-19463.herokuapp.com'
      const apiVersion = 'api/v1'
      const entity = 'question'
      const endPoint = `${baseUrl}/${apiVersion}/${entity}/`
      console.log("in questions");
      try {
        console.log("in questions try");
        const response = await axios.get(endPoint);
        console.log("response", response.data.questions.childrens);
        setQuestions(response.data.questions.childrens);
        console.log("state", questions);
      } catch (e) {
          console.log(e);
      }
    }
    fetchQuestions()
  }, [axios, setQuestions])

  return (
    <div className="complete_bot second_screen_size">
      {questions.length>0 ? (
        <>
          <div className=" border border-blue-400 rounded-lg">
            <ChatHead />
            <div className="message_body">
              
            </div>

            <div className="p-4 mt-6 h-48 overflow-scroll">
              <BotDialogues1 />
              <ChooseOption1 questions={questions}/>
            </div>
            <ChatFooter />
          </div>
        </>
      ) : (
        ""
      )}
      <div className="chat_icon">
  <img onClick={() => setQuestions(!questions)} src={messageicon} alt="" />
</div>
    </div>
  );
};

export default SecondScreen;


/*

{questions.childrens.length>0 ? (
        <>
           <ChooseOption1 questions={questions}/>
        </>
      ) : (
        ""
      )}


*/