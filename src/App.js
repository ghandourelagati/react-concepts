import React from 'react';
import './App.css';
import UpdatingRenderedElement from './main/UpdatingRenderedElement';
import ComponentsAndProps from './main/ComponentsAndProps';
import StateAndLifecycle from './main/StateAndLifecycle';
import Fetch from './main/Fetch';
import HandlingEvents from './main/HandlingEvents';
import ToggleComponent from './main/ToggleComponent';
import ConditionalRendering from './main/ConditionalRendering';
import PreventingComponentFromRendering from './main/PreventingComponentFromRendering';
import ListsAndKeys from './main/ListsAndKeys';
import ListsAndKeysUl from './main/ListsAndKeysUl';
import Forms from './main/Forms';
import FormsTextArea from './main/FormsTextArea';
import SelectTag from './main/SelectTag';
import LiftingStateUp from './main/LiftingStateUp';
import TempCalculator from './main/TempCalculator';
import Composition from './main/Composition';

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
      <PreventingComponentFromRendering />
      <ListsAndKeys />
      <ListsAndKeysUl />
      <Forms />
      <FormsTextArea />
      <SelectTag />
      <LiftingStateUp />
      <TempCalculator />
      <Composition />
    </div>
  );
}

export default App;
