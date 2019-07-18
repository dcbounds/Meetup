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
						let meetObj = actions.findMeetups(eventsObj.meta_keys._meetup);
						return (
							<div className="container mx-auto">
								<div className="jumbotron jumbo text-center">
									<div className="jumbocontain mx-auto">
										<h1 className="jumbotron-heading">{eventsObj.post_title}</h1>
										<h5 className="jumbotitle">
											Hosted By:
											{meetObj.post_title}
										</h5>
										<a href="#" className="btn btn-light my-2">
											Join This Event!
										</a>
									</div>
								</div>

								<div className="container mx-auto">
									<div className="card pcard mx-auto">
										<h4> {eventsObj.post_title}</h4>
										<h5 className="meetname">
											<Link to={"/meetups/" + meetObj.ID} style={{ textDecoration: "none" }}>
												Hosted By:
												{meetObj.post_title}
											</Link>
										</h5>
										<br />
										<br />
										<h6>{eventsObj.meta_keys.day}</h6>
										<h6>{eventsObj.meta_keys.time}</h6>
										<p>{eventsObj.post_content}</p>
										<p className="text-muted">{eventsObj.meta_keys._rsvpYes}</p>
										<p className="text-muted">{eventsObj.meta_keys._rsvpNo}</p>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
				<br />
				<Link to="/">
					<button className="btn btn-light">Back home</button>
				</Link>
			</div>
		);
	}
}

Events.propTypes = {
	match: PropTypes.object
};
