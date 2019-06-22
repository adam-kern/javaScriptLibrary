import React from 'react';

import Props from './components/Props/Props';
import EventHandlers from './components/EventHandlers/EventHandlers';
import State from './components/State/State';
import './App.css';

function App() {
  return (
    <div className="App">
      <Props />
      <EventHandlers />
      <State />
    </div>

  );
}

export default App;
