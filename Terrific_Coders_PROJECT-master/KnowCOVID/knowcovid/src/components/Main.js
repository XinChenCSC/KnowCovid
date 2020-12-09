import React from 'react'
import { Link } from 'react-router-dom'
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

                <Link to="/"><img src={ logo } width="150" height="150" alt="My_Logo"/></Link>
            	{/* <img src={ logo } width="150" height="150" alt="My_Logo"/> */}
                {/* <button><h1>NEWS</h1></button> */}

                <div className="dropdown">
                    <img src={ profileIcon } width="150" height="150" alt="profileIcon"/>
                    <div className="dropdown-content">
                        <button className="dropdown-button" onClick={handleLogout}>Logout</button>
                        <Link to="/userprofile"><button className="dropdown-button" >UserProfile</button></Link>
                      
                        
                    </div>
                </div>
            </nav>



            <div>
                <h1 class = "heading">
                Welcome
                <p>Get the Most Recent News!</p>
                </h1>
            </div>
            <div>
                <img class = "landing-img" src = {landingimg}/>
                <Link to="/news"><button>NEWS</button></Link> 
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

















