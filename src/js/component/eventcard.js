import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";
import Moment from "react-moment";

export default class Eventcard extends React.Component {
	render() {
		return (
			<div>
				<div className="container mx-auto">
					<div className="text-center mt-5">
						<div className="row">
							<Context.Consumer>
								{({ store, actions }) => {
									return store.events.map((item, index) => {
										return (
											<div key={index} className="col-md-4 d-flex justify-content-between">
												<div className="card mb-4">
													<svg
														className="bd-placeholder-img card-img-top"
														width="100%"
														height="225">
														<span>{item.ID}</span>
													</svg>
													<div className="card-body">
														<h5>{item.post_title}</h5>

														<div className="d-flex justify-content-between align-items-center">
															<div className="btn-group">
																<Link
																	to={"/events/" + item.ID}
																	style={{ textDecoration: "none" }}>
																	<button className="btn btn-sm btn-outline-secondary">
																		Join Event {}
																	</button>
																</Link>
																<Link
																	to={"/meetups/" + item.meta_keys._meetup}
																	style={{ textDecoration: "none" }}>
																	<button className="btn btn-sm btn-outline-secondary">
																		View Meetup {}
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
			</div>
		);
	}
}
Eventcard.propTypes = {
	eventsDate: PropTypes.object,
	eventsTime: PropTypes.string,
	eventsTitle: PropTypes.string,
	meetup: PropTypes.string,
	meetID: PropTypes.string,
	eventsID: PropTypes.number,
	eventsObj: PropTypes.object
};
