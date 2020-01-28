import React, { useState, useEffect } from "react";
//import './App.css';
import RaisedForm from "./Components/RaisedForm";
import RecentDonations from "./Components/RecentDonations";

const App = () => {
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [inputAmount, setInputAmount] = useState(5);
  const [RecentDonation, setRecentDonation] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    if (totalAmount < 1000) {
      setTotalAmount(parseInt(totalAmount) + parseInt(inputAmount));
    } else {
      window.alert("Reached Fund Reasing Goal! Thank you!");
    }
    console.log(useState, totalAmount, inputAmount);
    let donationArray = RecentDonation

    console.log("recent donation", RecentDonation, donationArray)
      let storage = {};
      storage = {
        totalAmount: totalAmount,
        inputAmount: inputAmount,
        name: name,
        caption: caption
      }
    
      setRecentDonation([... RecentDonation, storage ]);
  };


   useEffect(() =>{
     console.log('everytime state is being updated', totalAmount)
   })

  console.log("hooks", RecentDonation, inputAmount, totalAmount)
  return (
    <div className="App">
      <h1> Go Fund Me</h1>
      <RaisedForm
        name={name}
        caption={caption}
        totalAmount={totalAmount}
        inputAmount={inputAmount}
        setName={setName}
        setCaption={setCaption}
        setTotalAmount={setTotalAmount}
        setInputAmount={setInputAmount}
        handleSubmit={handleSubmit}
      />

      <RecentDonations
        name={name}
        caption={caption}
        totalAmount={totalAmount}
        inputAmount={inputAmount}
        setName={setName}
        setCaption={setCaption}
        setTotalAmount={setTotalAmount}
        setInputAmount={setInputAmount}
        RecentDonation={RecentDonation}
      />
    </div>
  );
};

export default App;
