import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/meetups.scss";

export class Meetups extends React.Component {
	render() {
		return (
			<div className="container mx-auto">
				<div className="jumbotron text-center">
					<div className="jumbocontain">
						<h1 className="jumbotron-heading">Join This Group!</h1>
						<p>
							<a href="#" className="btn btn-light my-2">
								Join Group!
							</a>
						</p>
					</div>
				</div>
				<Context.Consumer>
					{({ store }) => {
						return (
							<h1>This will show the demo element: {store.events[this.props.match.params.theid].ID}</h1>
						);
					}}
				</Context.Consumer>

				<br />
				<Link to="/">
					<button className="btn btn-dark">Back home</button>
				</Link>
			</div>
		);
	}
}
Meetups.propTypes = {
	match: PropTypes.object
};
