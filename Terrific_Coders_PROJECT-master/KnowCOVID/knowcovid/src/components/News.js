import React from 'react'
import { Link } from 'react-router-dom';
import './News.css';
import logo from '../assets/KnowCOVIDlogo.png'
import profileIcon from '../assets/profileIcon.png'
import voxlogo from '../assets/voxlogo.png'
import BBCNews from '../assets/BBCNewslogo.png'
import ScienceNews from '../assets/ScienceNewslogo.png'
import BuzzFeedNews from '../assets/BuzzFeedNewslogo.png'
import TheGuardian from '../assets/TheGuardianlogo.png'
import NBCnews from '../assets/NBCNewslogo.png'
import APnews from '../assets/APNewslogo.png'
import NPRnews from '../assets/nprNewslogo.png'
import weeklynews from '../assets/Websites-of-the-Week/results.txt'

// js code to read from the result.txt file
var weeklylist;

//
async function getData(){
    var response = await fetch(weeklynews)
    .then(r => r.text());
    return response;
};

getData().then(text => {
    //console.log('text decoded:', text);
    weeklylist = text.toString().split("\n");
});

const News = ({handleLogout}) =>{
    return(
        <section className="main">
            <nav>
            	{/*<img src={ logo } width="150" height="150" alt="My_Logo"/>*/}
                <Link to="/"><img src={ logo } width="150" height="150" alt="My_Logo"/></Link>
                {/* <button><h1>NEWS</h1></button> */}
                <div className="dropdown">
                    <img src={ profileIcon } width="150" height="150" alt="profileIcon"/>
                    <div className="dropdown-content">
                        <Link to="/userprofile"><button className="dropdown-button" >User Profile</button></Link>
                        <button className="dropdown-button" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </nav>
            <div class="heading">
                <h1>
                    News Page
                </h1>
            </div>
            <div class="list-of-news">
            <ol>
                    <div class="news-elements">
                        <li></li>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={ voxlogo } width="200" height="150"/>
                        <div class="NewsLink">
                            <a href={weeklylist[0]} target="_blank">
                                {weeklylist[0]}
                            </a>
                        </div>
                    </div>

                    <div class="news-elements">
                        <li></li>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={ BBCNews } width="200" height="150"/>
                        <div class="NewsLink">
                            <a href={weeklylist[1]} target="_blank">
                                {weeklylist[1]}
                            </a>
                        </div>
                    </div>
                    <div class="news-elements">
                        <li></li>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={ ScienceNews } width="200" height="150"/>
                        <div class="NewsLink">
                            <a href={weeklylist[2]} target="_blank">
                                {weeklylist[2]}
                            </a>
                        </div>
                    </div>
                    <div class="news-elements">
                        <li></li>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={ BuzzFeedNews } width="200" height="150"/>
                        <div class="NewsLink">
                            <a href={weeklylist[3]} target="_blank">
                                {weeklylist[3]}
                            </a>
                        </div>
                    </div>
                    <div class="news-elements">
                        <li></li>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={ TheGuardian } width="200" height="150"/>
                        <div class="NewsLink">
                            <a href={weeklylist[4]} target="_blank">
                                {weeklylist[4]}
                            </a>
                        </div>
                    </div>
                    <div class="news-elements">
                        <li></li>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={ NBCnews } width="200" height="150"/>
                        <div class="NewsLink">
                            <a href={weeklylist[5]} target="_blank">
                                {weeklylist[5]}
                            </a>
                        </div>
                    </div>
                    <div class="news-elements">
                        <li></li>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={ APnews } width="200" height="150"/>
                        <div class="NewsLink">
                            <a href={weeklylist[6]} target="_blank">
                                {weeklylist[6]}
                            </a>
                        </div>
                    </div>
                    <div class="news-elements">
                        <li></li>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={ NPRnews } width="200" height="150"/>
                        <div class="NewsLink">
                            <a href={weeklylist[7]} target="_blank">
                                {weeklylist[7]}
                            </a>
                        </div>
                    </div>
                </ol>
            </div>
            <div class="heading">
                <div class="case-stats">
                        <b> Daily COVID Statistics Updates provided by NBC News.</b>
                        <br/>
                        <a href="https://www.nbcnews.com/health/health-news/coronavirus-u-s-map-where-virus-has-been-confirmed-across-n1124546?icid=cv_marquee"
                        target="_blank">
                            Click here to view
                        </a>
                </div>
                <br/>
            </div>

            <div class = "footer">
                <br/>
                <p>KnowCOVID</p>
                <p> Copyright KnowCOVID Inc 2020. All Rights Reserved.</p>
            </div>
        </section>
    );
};      
export default News;