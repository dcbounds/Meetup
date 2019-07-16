import React from "react";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";
import Moment from "react-moment";
import Eventcard from "../component/eventcard.js";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="jumbotron homejumbo text-center">
					<div className="jumbocontain">
						<h1 className="jumbotron-heading">The real world is calling</h1>
						<p className="lead text">
							Join a local group to meet people, try something new, or do more of what you love.
						</p>
						<p>
							<Link to="/meetups">
								<button className="btn btn-light">Join Meetup</button>
							</Link>
						</p>
					</div>
				</div>
				<Eventcard />
			</div>
		);
	}
}
Home.propTypes = {
	match: PropTypes.object
};
