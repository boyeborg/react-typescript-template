import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./pages/index";
import About from "./pages/about";

export default function App() {
	return (
		<Router>
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/">
					<Index />
				</Route>
			</Switch>
		</Router>
	);
}
