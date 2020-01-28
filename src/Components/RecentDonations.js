import React, {useState, useEffect} from 'react'
import "../App.css";

const RecentDonations =(props) =>{



    return(
        <div className="Recent Donations">
            <div className = 'List'> 
            <h1> recent Donations </h1> 
             </div>
        
        <div>
        <ul>
            <li> {props.name} donated {props.inputAmount}  {props.captions}
         
            </li>
        </ul>
        </div>
        </div>
    )

}

export default RecentDonations;