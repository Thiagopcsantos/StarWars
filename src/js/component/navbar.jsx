import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand">Navbar</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">Features</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">Pricing</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								id="navbarDropdownMenuLink"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Dropdown link
							</a>
							<div
								className="dropdown-menu"
								aria-labelledby="navbarDropdownMenuLink">
								<a className="dropdown-item">Action</a>
								<a className="dropdown-item">Another action</a>
								<a className="dropdown-item">
									Something else here
								</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

/*<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						React Webapp Boilerplate
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">
							Check the Context in action
						</button>
					</Link>
				</div>
			</nav>*/
