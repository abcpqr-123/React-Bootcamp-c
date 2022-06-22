import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
function App() {
  return (
    <div className="App">
    <NameList />
    <UserGreeting />
    <ParentComponent />
    <EventBind />
    <ClassClick />
    <FunctionClick />
    <Message />
      <Greet name = 'Surya' heroName = 'Batman'>
      <p>This is childern props</p>
      </Greet>
      <Greet name = 'abc' heroName = 'Spiderman'>
      <button>click</button>
      </Greet>
      <Greet name = 'xyz' heroName = 'Superman'/>
      <Welcome name = 'xyz' heroName = 'Spiderman'/>
      <Welcome name = 'abc' heroName = 'xyz'/>
      <Welcome name = 'pqr' heroName = 'lmn'/>
      <Hello />
    </div> 
  );
}

export default App;
