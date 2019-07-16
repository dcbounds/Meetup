import React from "react";
import { Link } from "react-router-dom";
import Meetupimg from "../../img/MeetupClone.png";
import "../../styles/navbar.scss";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-0">
				<Link to="/">
					<img className="logo" width="125px" margin="0px" src={Meetupimg} />
				</Link>
				<div className="ml-auto">
					<Link to="">
						<button className="btn btn-Link">Start a New Group</button>
					</Link>
					<Link to="">
						<button className="btn btn-Link ml-2">Login</button>
					</Link>
					<Link to="">
						<button className="btn btn-Link ml-2">Sign-Up</button>
					</Link>
				</div>
			</nav>
		);
	}
}
