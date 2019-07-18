import React from "react";
import "../../styles/meetups.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";
import Moment from "react-moment";

export default class Meetupcard extends React.Component {
	render() {
		return (
			<div>
				<div className="containermeetcard">
					<div className="text-center mt-5">
						<Context.Consumer>
							{({ store, actions }) => {
								let meetupID = this.props.meetID;
								let events = actions.findMeetupEvents(meetupID);
								return events.map((item, index) => {
									return (
										<div key={index} className="meetcardbox">
											<div className="meetcard mb-4">
												<svg
													className="bd-placeholder-img card-img-top"
													width="100%"
													height="225">
													<span>{item.ID}</span>
												</svg>

												<div className="card-body">
													<h5>{item.post_title}</h5>
													<h6 className="text-muted">Hosted By: {events.post_title}</h6>

													<div className="d-flex justify-content-between align-items-center">
														<div className="btn-group">
															<Link
																to={"/events/" + item.ID}
																style={{ textDecoration: "none" }}>
																<button className="btn btn-sm btn-outline-secondary">
																	View Event
																</button>
															</Link>
														</div>
														<small className="text-muted">9 mins</small>
													</div>
												</div>
											</div>
										</div>
									);
								});
							}}
						</Context.Consumer>
					</div>
				</div>
			</div>
		);
	}
}
Meetupcard.propTypes = {
	meetID: PropTypes.number,
	eventsDate: PropTypes.object,
	eventsTime: PropTypes.string,
	eventsTitle: PropTypes.string,
	meetup: PropTypes.string,
	eventsID: PropTypes.number,
	eventsObj: PropTypes.object
};
