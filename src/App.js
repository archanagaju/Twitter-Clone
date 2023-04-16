import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Explore from "./components/pages/Explore";
import Notifications from "./components/pages/Notifications";
import Bookmarks from "./components/pages/Bookmarks";
import Lists from "./components/pages/Lists";
import Message from "./components/pages/Message";
import Profile from "./components/pages/Profile";
import More from "./components/pages/More";
import { createContext } from 'react';
import Login from "./components/Logout/Login";
import Signup from "./Signup/Signup";
import auth from "./firebase";


export const myContext = createContext();

function App() {

	const [state, setState] = useState(true);

	const logOut = () => {
		localStorage.setItem("isLoggedIn", false);
		localStorage.removeItem("userDetails");
		auth.signOut();
	};

	const handleLogin = () => {
		setState(!state);
	};

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				localStorage.setItem("userDetails", JSON.stringify(user));
				localStorage.setItem('isLoggedIn', true)
			}
		});
	}, []);

	return (
		<myContext.Provider value={{ handleLogin, logOut }}>

			<BrowserRouter>
				<div className="app">

					<Routes>

						<Route exact path="/" element={<Login />} />
						<Route exact path="/home" element={<Home />} />
						<Route exact path="/explore" element={<Explore />} />
						<Route exact path="/notifications" element={<Notifications />} />
						<Route exact path="/message" element={<Message />} />
						<Route exact path="/bookmarks" element={<Bookmarks />} />
						<Route exact path="/lists" element={<Lists />} />
						<Route exact path="/profile" element={<Profile />} />
						<Route exact path="/More" element={<More />} />
						<Route exact path="/signup" element={<Signup />} />
					</Routes>
				</div>
			</BrowserRouter>
		</myContext.Provider>
	);
}

export default App;
