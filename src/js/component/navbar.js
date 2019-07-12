import React from "react";
import { Link } from "react-router-dom";
import Meetupimg from "../../img/MeetupClone.png";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-0">
				<Link to="/">
					<img className="logo" width="75px" margin="0px" src={Meetupimg} />
				</Link>
				<div className="ml-auto">
					<Link to="/events">
						<button className="btn btn-dark">Start a New Group</button>
					</Link>
				</div>
			</nav>
		);
	}
}
