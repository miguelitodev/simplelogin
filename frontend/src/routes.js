import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

const MainRoutes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Login />
			</Route>
			<Route path="/SignUp">
				<SignUp />
			</Route>
			<Route path="/Dashboard">
				<Dashboard />
			</Route>
		</Switch>
	);
};

export default MainRoutes;
