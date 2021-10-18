
import React,{ useState } from "react";
import {Link} from 'react-router-dom';
import '../../assets/styles/global.scss';
import messageIcon from '../../assets/icons/message-icon.svg';
import {useHistory} from 'react-router-dom';

const ChatBot = () => {
const email = localStorage.getItem('userEmail');
const history = useHistory();
// eslint-disable-next-line react-hooks/rules-of-hooks
const [chat , setChat] = useState(true);

return(
    <div className="complete_bot first_secreen_size">
        {!email ? (
        <>
            <div className="">
    {chat? 
        <div className=" border border-blue-500 rounded-lg align-bottom p-6  " >
           
           <div> 
            <h2 className="text-lg  font-semibold">Hi, i'm IZ Bot</h2>
            <h3 className="text-base  text-gray-400">What would you like to do?</h3>
            </div>

            <div className="mt-4">
                <Link to="/secondscreen">
                <div className="First-options">
                    <p className='First-option-text'>Hire a Tech Expert</p>
                </div>
                </Link>
                <div className="First-options">
                    <p className='First-option-text'>Ask a Question</p>
                </div>
                <div className="First-options">
                    <p className='First-option-text'>Learn About InvoZone</p>
                </div>
                <div className="First-options">
                    <p className='First-option-text'>Can't find what you're looking for?</p>
                </div>
            </div>       
        </div>
   
     :
      ''
      }
    
</div>
            <div className="chat_icon">
                <img onClick={() => setChat(!chat)} src={messageIcon} alt="" />
            </div>
        </>
        ) : history.push('/message')}
    </div>
);
}

export default ChatBot;