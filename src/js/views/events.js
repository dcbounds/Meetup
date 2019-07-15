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
				return <Moment format="MM/DD">{data}</Moment>;
			}
			if (format == "time") {
				let timeArr = data.split(":");
				let tikToc = String(timeArr[0]) + ":" + String(timeArr[1]);
				return tikToc;
			}
		};
		return (
			<div className="text-center">
				<Context.Consumer>
					{({ store, actions }) => {
						let eventsID = this.props.match.params.ID;
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
											<div>{this.props.eventsObj.post_title}</div>
											<div>{this.props.meetID}</div>
										</p>
									</div>
								</div>
								<div className="container">
									<div className="card">
										<p key={index} className="list-group-item d-flex justify-content-between">
											<Link to={"/meetups/" + index}>
												<span> {item.post_content}</span>
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
	match: PropTypes.object,
	eventsDate: PropTypes.object,
	eventsTime: PropTypes.string,
	eventsTitle: PropTypes.string,
	meetup: PropTypes.string,
	meetID: PropTypes.string,
	eventsID: PropTypes.number,
	eventsObj: PropTypes.object
};
