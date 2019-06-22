import React from 'react';
import TestChild from './components/TestChild'
import ImageChild from './components/ImageChild'
import FormChild from './components/FormChild'
import './App.css';

function App() {
  const testVar = <p>This is nuts!</p>

  function innerPlay() {
    return (
      <h3>This was returned from a function.</h3>
    )
  }

  function arrayPlay() {
    return [0, 1, 2, 3, 4].map(val => <p>{val}</p>) //input array: [0,1,2,3,4] output array: p tags with numbers inside [1,2,3,4,5] 
  }

  function arrayPlay2() {
    return ['star ', 'wars ', 'movies '].map(val => <span>{val}</span>)
  }

  function arrayPlay3() {
    return [0,1,2,3,4].filter(val => val%2===0).map(val=> <li>{val}</li>)
  }

  return (
    <div id="styleTest">
      <div id="navMain">
        <ul className="list">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
        </ul>

      </div>
      <TestChild />
      <br></br>
      <br></br>
      <ImageChild />
      <br></br>
      <br></br>
      <p>What is Darth Vader's real name?</p>
      <br></br>
      <br></br>
      <FormChild />
      {testVar}
      {innerPlay()}
      {arrayPlay()}
      {arrayPlay2()}
      {arrayPlay3()}
    </div>

  );
}

export default App;