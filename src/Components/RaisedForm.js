import React, { useState, useEffect } from "react";
import "../App.css";


const RaisedForm = (props) => {
  return (
    <div className="RaisedDiv">
      <h1> Raised $ {props.totalAmount} of $1000</h1>
      <form className="RaisedForm" onSubmit={props.handleSubmit}>
        <label for="name"> Name</label>
        <input
          name="name"
          type="text"
          placeholder="Aransa"
          value={props.name}
          onChange={e => props.setName(e.target.value)}
        ></input>

        <label for="caption"> Caption</label>
        <input
          type="text"
          placeholder="..."
          name="captions"
          value={props.caption}
          onChange={e => props.setCaption(e.target.value)}
        ></input>

        <input
          type="range"
          name="points"
          min="5"
          max="500"
          onChange={e => props.setInputAmount(e.target.value)}
        ></input>
        <p> {props.inputAmount}</p>

        <button type="submit"> Donate!</button>
      </form>

   
    </div>
  );
};

export default RaisedForm;
