import React, { useState } from "react";



const ProgressBar = (props) => {
 const [maxAmount, setMaxAmount] = useState(1000)
 const [progress, setProgress] = useState(0)


  console.log(maxAmount, props.totalAmount)


  const calculatePercentage = (totalAmount, maxAmount) => {
    console.log(totalAmount)
    if(totalAmount === 0) {
      return 0
    } else {
      return (Number(totalAmount) / Number(maxAmount)) * 100
    }
  }


  console.log("progress", `${calculatePercentage(props.totalAmount, maxAmount)}px`, calculatePercentage(props.totalAmount, maxAmount))

  return (
    <div id="myProgress" style={{width: "100px", height: "10px", backgroundColor: "red"}}>
<div className="myBar" style={{ width: `${calculatePercentage(props.totalAmount, maxAmount)}px`, backgroundColor:"green"}}>{(props.totalAmount / maxAmount) * 100}%</div>
    </div>
  );
};

export default ProgressBar;