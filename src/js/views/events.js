import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Moment from "react-moment";
import "../../styles/events.scss";

export class Events extends React.Component {
	render() {
		let parseMoment = (data, format) => {
			if (format == "date") {
				return <Moment format="MM/DD/YY">{data}</Moment>;
			}
			if (format == "time") {
				return (
					<Moment format="LT" parse="HH:mm:ss">
						{data}
					</Moment>
				);
			}
		};
		return (
			<div className="text-center">
				<Context.Consumer>
					{({ store, actions }) => {
						let eventsID = this.props.match.params.theid;
						let eventsObj = actions.findEvents(eventsID);
						let meetID = actions.findMeetups(eventsObj.meta_keys._meetup);
						return (
							<div className="container mx-auto">
								<div className="jumbotron text-center">
									<div className="jumbocontain mx-auto">
										<h1 className="jumbotron-heading">Join This Event!</h1>
										<p>
											<a href="#" className="btn btn-light my-2">
												Join Event
											</a>
											<div>{eventsObj.post_title}</div>
											<div>{meetID}</div>
										</p>
									</div>
								</div>
								<div className="container">
									<div className="card">
										<p className="list-group-item d-flex justify-content-between">
											<Link to={"/meetups/" + meetID}>
												<span> {eventsObj.post_title}</span>
											</Link>
											<p>{"Blank Stuff"}</p>
										</p>
									</div>
								</div>
							</div>
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

Events.propTypes = {
	match: PropTypes.object
};
