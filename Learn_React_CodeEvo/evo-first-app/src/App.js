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
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifeCycle from './components/LifeCycleA';
import { Fragment } from 'react';
import FragmentDemo from './components/FragmentDemo';
import Tables from './components/Tables';
// import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';

function App() {
  return (
    <div className="App">
    <FocusInput />
    <RefsDemo />
    <ParentComp />
    <Tables />
    <FragmentDemo />
    <LifeCycle />
    <Form />
    <h1 className='error'> Error </h1>
    <h1 className={styles.success}>Success</h1>
    <Inline />
    <Stylesheet primary = {true}/>
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
