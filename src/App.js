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
      // storage.push({
      //   totalAmount: totalAmount,
      //   inputAmount: inputAmount,
      //   name: name
      // });
      storage = {
        totalAmount: totalAmount,
        inputAmount: inputAmount,
        name: name
      }
      console.log("storage", storage)
      donationArray.push(storage)

      setRecentDonation({ RecentDonation: donationArray });
  };

  // useEffect(() => {
  //   console.log(useState, totalAmount, inputAmount);
  //   let storage = [];
  //   storage.push({
  //     totalAmount: totalAmount,
  //     inputAmount: inputAmount,
  //     name: name
  //   });
  //   setRecentDonation({ RecentDonation: storage });

  //   console.log(storage);
  // }, []);


  console.log("hooks", RecentDonation, inputAmount)
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
