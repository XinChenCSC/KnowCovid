import React from 'react'
import logo from '../assets/KnowCOVIDlogo.png'
import landingimg from '../assets/covid_info.png'
import profileIcon from '../assets/profileIcon.png'
import fire from '../fire';



const Main = ({handleLogout, user}) =>{
    {console.log(user)}
{  console.log(fire.auth().currentUser.metadata.lastSignInTime)}
  
    return(
       
        <div className="main">
 
            <nav>

            	<img src={ logo } width="150" height="150" alt="My_Logo"/>
                <button><h1>NEWS</h1></button>

                <div className="dropdown">
                    <img src={ profileIcon } width="150" height="150" alt="profileIcon"/>
                    <div className="dropdown-content">
                        <button className="dropdown-button" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </nav>
            <div className="userprofile">
                <h1 className="userprofile1">User Profile</h1>
                <h3 className="userprofile2">Email: {fire.auth().currentUser.email}</h3>
                <h3 className="userprofile2">Created Date: {fire.auth().currentUser.metadata.creationTime}</h3>
                <h3 className="userprofile2">Last Login Date: {fire.auth().currentUser.metadata.lastSignInTime}</h3>
                <h1 class = "slogan">Subscribed</h1>
                
                <div className = "subBox">
                <a className = "newLink" target="_blank" href="https://www.vox.com/21552934/moderna-pfizer-covid-19-vaccine-biontech-coronavirus-cold-chain">Vox</a>           
                <br/>
                <a className = "newLink" target="_blank" href="https://www.bbc.com/news/business-55017666">BBC</a>
                </div>
                
            
                
                
        
            </div>
            <div>
                <h1 class = "slogan">
                Welcome
                <p>Get the Most Recent News!</p>
                </h1>
            </div>
            <div>
                <img class = "landing-img" src = {landingimg}/>
                <button> NEWS </button>
            </div>
            <div class = "footer">
                <br/>
                <p>KnowCOVID</p>
                <p> Copyright KnowCOVID Inc 2020. All Rights Reserved.</p>
            </div>


        </div>
        
    );
    
};      
export default Main;

















