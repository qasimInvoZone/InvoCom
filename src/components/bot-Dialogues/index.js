import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/global.scss';
import axios from 'axios'
const BotDialogues1 = () => {


return(
  
       <div>
           <p className="text-xs text-gray-400">Iz bot 11:54 am</p>
           <p className="text-sm mb-3">Get access to pool of tech experts across multiple domains</p>
       </div>
       
);
}

export default BotDialogues1;


export const BotDialogues4 = () => {


    return(
      
           <div className="text-container">
               <p className="text-xs text-gray-400">Iz bot 11:54 am</p>
               <p className="text-sm mb-3">Please confirm your your contact information and best time to meet, We will send an appointment to your calender instantly.</p>
               <p className="text-sm mb-3">Please select the date and time that you're available, also confirm your email address</p>
           </div>
           
    );
    }

    export const BotDialogues2 = () => {


        return(
          
               <div>
                   <p className="text-xs text-gray-400">Iz bot 11:54 am</p>
                   <p className="text-sm mb-3">What kind of work design & development work do you need ?</p>
               </div>
               
        );
        }
    export const Form = () =>
    {
        const [email, setEmail] = useState('')
        const [fullname, setFullname] = useState('')
        const [username, setUsername] = useState('')
        const [chat, setChat] = useState('')

        const registerUser = async () => {
            const baseUrl = 'http://stormy-sierra-19463.herokuapp.com'
            const apiVersion = 'api/v1'
            const entity = 'user'
            const role = 'USER'
            const endPoint = `${baseUrl}/${apiVersion}/${entity}/register`
            console.log(email, fullname);
            try {
                const response = await axios.post(endPoint, { username, fullname, email, role })
                console.log("response", response)
                console.log(response.status)
                if (response.status === 200) {
                    localStorage.setItem('userEmail', email)
                }
            } catch (e) {
                console.log(e);
            }
        }
            return(
                <div>
                    <input type="text" placeholder="Email Address" className="input-style" onChange={(e) => { setEmail(e.target.value) }}/><br />
                    <input type="text" placeholder="Full Name" className="input-style mt-2" onChange={(e) => { setFullname(e.target.value) }}/><br />
                    <input type="text" placeholder="Username" className="input-style mt-2" onChange={(e) => { setUsername(e.target.value) }}/><br />
                    <Link to="/message">
                    <button className="bg-blue-500 rounded py-1 px-2 mt-2 text-xs text-white" onClick={() => registerUser()}>send</button>
                    </Link>
                </div>
            );

    }