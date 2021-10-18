import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import Slider from "react-slick";
import '../../assets/styles/global.scss';
const displayQuestions = (questions) => {
    console.log("props",questions)
    return questions.map((question) => {
        return  <Link to={{ pathname: '/thirdscreen', state: { data: question} }}>
                    <div className="second-options">
                        <p className='second-option-text'>{question.questionStatement}</p>
                    </div>
                </Link>
    })
 }

const chooseoptions1 = (props) => {


return(
        <div className="container">
           {displayQuestions(props.questions)}
        </div>
);
}

export default chooseoptions1;


const displayQuestions2 = (data) => {
    return data.map((d) => {
        return  <Link to="/form">
                    <div className="second-options">
                        <p className='second-option-text'>{d.questionStatement}</p>
                    </div>
                </Link>
    })
 }


export const Chooseoptions2 = (props) => {
    const history = useHistory();
    console.log("props",props)
    return <div className="container">
     { props.data.data.childrens ? displayQuestions2(props.data.data.childrens) : history.push('/form')}
    </div>
    }

    export const Scheduler = () => {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                  breakpoint: 550,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                },
                {
                    breakpoint: 450,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: false
                    }
                  }
            ]
          };
        return(
            <div className="width">
            <div className="flex justify-center mb-2">
                    <Slider className="slider_comp" {...settings}>
                        <div className="calender-style size">
                           <p className="text-xs">23</p>
                           <p className="text-xs">Aug</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">24</p>
                           <p className="text-xs">Aug</p>

                        </div >
                        <div className="calender-style">
                           <p className="text-xs">25</p>
                           <p className="text-xs">Aug</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">26</p>
                           <p className="text-xs">Aug</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">27</p>
                           <p className="text-xs">Aug</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">28</p>
                           <p className="text-xs">Aug</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">29</p>
                           <p className="text-xs">Aug</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">30</p>
                           <p className="text-xs">Aug</p>
                        </div >
                        
                    </Slider>

                </div>

            <div className="flex justify-center mb-2">
                    <Slider className="slider_comp" {...settings}>
                        <div className="calender-style">
                           <p className="text-xs">8:00<br /> am</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">8:00<br /> am</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">8:30<br /> am</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">9:00<br /> am</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">9:30<br /> am</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">10:00<br /> am</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">10:30<br /> am</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">11:00<br /> am</p>
                        </div >
                        
                    </Slider>

                </div>
                </div>
        );
    }