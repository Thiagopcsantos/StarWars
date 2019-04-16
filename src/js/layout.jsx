import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { Single } from "./views/single.jsx";
import injectContent from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

import { Link } from "react-router-dom";

//create your first component
export class Layout extends React.Component {
	render() {
		return <Navbar />;
	}
}

export default injectContent(Layout);
/*	<div className="d-flex flex-column h-100">
					<BrowserRouter>
						<ScrollToTop>
							<Navbar />
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/demo" component={Demo} />
								<Route path="/single/:theid" component={Single} />
								<Route render={() => <h1>Not found!</h1>} />
							</Switch>
							<Footer />
						</ScrollToTop>
					</BrowserRouter>
				</div>*/
