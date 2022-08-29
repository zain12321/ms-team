import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SidebarIcons from './components/Sidebaricons';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from './pages/Chat';
import AttendPage from './pages/AttendPage';
import Person2 from './pages/Person2';
import ChitChat from './pages/ChitChat';



function App() {
  return (
    <div className=''>
      <Router>
        <Header/>
        <div className='main-sec'>
        <SidebarIcons/>
        <Chat />

        <Switch>
          <Route exact path='/'>
              <AttendPage/>
          </Route>
          <Route path='/chitchat'>
              <ChitChat/>
          </Route>
          <Route path='/person2'>
              <Person2/>
          </Route>
        </Switch>
        </div>
        

      </Router>
    </div>
  );
}

export default App;
