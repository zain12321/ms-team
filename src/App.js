import './App.css';
import Header from './components/Header';
import SidebarIcons from './components/Sidebaricons';
import {
	BrowserRouter as Router,
	Routes,
  } from 'react-router-dom';
import Chat from './pages/Chat';

function App() {
	return (
		<Router>
		<div className="">
		
				<Header />
					<SidebarIcons />
                 <Chat />
				<div className="main-sec">
					<Routes>
						
					</Routes>
				</div>
			
		</div>
		</Router>
	);
}

export default App;
