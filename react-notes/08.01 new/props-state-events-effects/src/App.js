import React from 'react';
import Props from './components/Props/Props';
import EventHandlers from './components/EventHandlers/EventHandlers';
import State from './components/State.js/State';
import Effects from './components/Effects/Effects';


import './App.css';

function App() {
  return (
    <div>
      <Props str={'string'} luckyNum={4} arr={['flash', 'batman', 'martian manhunter']}/>
      <EventHandlers />
      <State />
      <Effects/>

    </div>
  );
}

export default App;