import React from "react";
import "../App.css";
import ProgressBar from "./ProgressBar";


const RecentDonations = props => {
  const donationList = props.RecentDonation.map(el => {
    return (
      <div key={el.name}>
        <h3>
          {" "}
          {el.name} donated {el.inputAmount}{" "}
        </h3>
        <p> {el.caption} </p>
      </div>
    );
  });


  
  return (
   
    <div className="Recent Donations">
      <div className="List">
        <h1> Recent Donations </h1>
    <ProgressBar 
    totalAmount = {props.totalAmount}
    />
        <ul>{donationList}</ul>
      </div>
    </div>
  );
};

export default RecentDonations;
