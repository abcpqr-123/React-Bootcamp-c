import React from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import Datafetching from './components/Datafetching';

function App() {
  return (
    <div className="App">
    <Datafetching />
    <IntervalHookCounter />
      <MouseContainer />
    {/* <HookMouse /> */}
    <HookCounterOne />
    <HookCounterFour />
    <HookCounterThree />
    <HookCounterTwo />
    <HookCounter />
     <ClassCounter />
    </div>
  );
}

export default App;