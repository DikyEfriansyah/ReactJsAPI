import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import File from './File';
import Display from './Display';
import CustomFunctionJsx from './CustomFunctionJsx';
import Counter from './Counter';
import Counter1 from './Counter1';
import CounterHook from './CounterHook';
import RegionViewApi from './RegionView/RegionViewApi';

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <ClassComponent></ClassComponent>
      <FunctionComponent></FunctionComponent>
      <File></File>
      <Display></Display>
      <CustomFunctionJsx></CustomFunctionJsx>
      <Counter></Counter>
      <Counter1/>
      <CounterHook></CounterHook> */}
      {/* <Display></Display> */}
      <RegionViewApi></RegionViewApi>
    </div>
    
  );
}

export default App;
