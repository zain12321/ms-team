import './App.css';
import Header from './components/Header';
import SidebarIcons from './components/Sidebaricons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './pages/Chat';
import AttendPage from './pages/AttendPage';
import Person2 from './pages/Person2';
import Person1 from './pages/Person1';
import Person3 from './pages/Person3';
import Person4 from './pages/Person4';
import Space from './pages/Space';
import ChitNav from './pages/ChitNav';
import Person5 from './pages/Person5';

function App() {
	return (
		<div className="">
			    <Router>
				<Header />
                 
				<div className="main-sec">
					<SidebarIcons />
					<Chat />
					<Switch>
						<Route exact path="/">
							<AttendPage />
						</Route>
						<Route path="/chitchat">
							<ChitNav />
						</Route>
						<Route path="/person1">
							<Person1 />
						</Route>
						<Route path="/person2">
							<Person2 />
						</Route>
						<Route path="/person3">
							<Person3 />
						</Route>
						<Route path="/person4">
							<Person4 />
						</Route>
            <Route path="/space">
							<Space />
						</Route>
						<Route path="/person5">
							<Person5 />
						</Route>
						
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
