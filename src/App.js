import React from 'react';
import './App.css';
import UpdatingRenderedElement from './main/UpdatingRenderedElement';
import ComponentsAndProps from './main/ComponentsAndProps';
import StateAndLifecycle from './main/StateAndLifecycle';
import Fetch from './main/Fetch';
import HandlingEvents from './main/HandlingEvents';
import ToggleComponent from './main/ToggleComponent';
import ConditionalRendering from './main/ConditionalRendering';

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <UpdatingRenderedElement />
      <ComponentsAndProps name="Ahmed" />
      <StateAndLifecycle />
      <Fetch />
      <HandlingEvents />
      <ToggleComponent />
      <ConditionalRendering />
    </div>
  );
}

export default App;
