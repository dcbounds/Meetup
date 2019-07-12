import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/events.scss";

export class Events extends React.Component {
	render() {
		return (
			<div>
				<div className="container mx-auto">
					<div className="jumbotron text-center">
						<div className="jumbocontain mx-auto">
							<h1 className="jumbotron-heading">Join This Event!</h1>
							<p>
								<a href="#" className="btn btn-light my-2">
									Join Event
								</a>
							</p>
						</div>
					</div>
				</div>

				<div className="container">
					<ul className="list-group">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.events.map((item, index) => {
									return (
										<li key={index} className="list-group-item d-flex justify-content-between">
											<Link to={"/meetups/" + index}>
												<span>Link to: {item.ID}</span>
											</Link>
											<p>{"Check store/store.js scroll to the actions to see the code "}</p>
											<button
												className="btn btn-success"
												onClick={() => actions.changeColor(index, "orange")}>
												Change Color
											</button>
										</li>
									);
								});
							}}
						</Context.Consumer>
					</ul>
				</div>

				<br />
				<Link to="/">
					<button className="btn btn-dark">Back home</button>
				</Link>
			</div>
		);
	}
}
