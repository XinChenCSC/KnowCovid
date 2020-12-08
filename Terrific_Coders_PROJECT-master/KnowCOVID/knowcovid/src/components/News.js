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
                        <li><img src={ voxlogo } width="200" height="150"/></li>
                        <div class="NewsLink">Vox link</div>
                    </div>
                    <div class="news-elements">
                        <li><img src={ BBCNews } width="200" height="150"/></li>
                        <div class="NewsLink">BBC News link</div>
                    </div>
                    <div class="news-elements">
                        <li><img src={ ScienceNews } width="200" height="150"/></li>
                        <div class="NewsLink">ScienceNews link</div>
                    </div>
                    <div class="news-elements">
                        <li><img src={ BuzzFeedNews } width="200" height="150"/></li>
                        <div class="NewsLink">BuzzFeedNews link</div>
                    </div>
                    <div class="news-elements">
                        <li><img src={ TheGuardian } width="200" height="150"/></li>
                        <div class="NewsLink">The Guardian link</div>
                    </div>
                    <div class="news-elements">
                        <li><img src={ NBCnews } width="200" height="150"/></li>
                        <div class="NewsLink">NBC News link</div>
                    </div>
                    <div class="news-elements">
                        <li><img src={ APnews } width="200" height="150"/></li>
                        <div class="NewsLink">AP News link</div>
                    </div>
                    <div class="news-elements">
                        <li><img src={ NPRnews } width="200" height="150"/></li>
                        <div class="NewsLink">NPR News link</div>
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