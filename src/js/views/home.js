import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="jumbotron text-center">
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
														<span>{item.ID.post_title}</span>
													</svg>
													<div className="card-body">
														<h1>{store.events.post_title}</h1>

														<div className="d-flex justify-content-between align-items-center">
															<div className="btn-group">
																<Link
																	to={"/events/" + index}
																	style={{ textDecoration: "none" }}>
																	<button className="btn btn-sm btn-outline-secondary">
																		Join Event
																	</button>
																</Link>
																<Link
																	to={"/meetups/" + index}
																	style={{ textDecoration: "none" }}>
																	<button className="btn btn-sm btn-outline-secondary">
																		View Meetup
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
Home.propTypes = {
	match: PropTypes.object
};
