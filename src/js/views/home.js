import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

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
							<div className="col-md-4">
								<Link to="/events" style={{ textDecoration: "none" }}>
									<div className="card mb-4">
										<svg className="bd-placeholder-img card-img-top" width="100%" height="225">
											<title>Placeholder</title>
										</svg>
										<div className="card-body">
											<p className="card-text">
												Meetup with us this weekend! Lets get together folks!
											</p>
											<div className="d-flex justify-content-between align-items-center">
												<div className="btn-group">
													<Link to="/meetups">
														<button
															type="button"
															className="btn btn-sm btn-outline-secondary">
															View Meetup
														</button>
													</Link>
													<Link to="/events">
														<button
															type="button"
															className="btn btn-sm btn-outline-secondary">
															Join Event!
														</button>
													</Link>
												</div>
												<small className="text-muted">9 mins</small>
											</div>
										</div>
									</div>
								</Link>
							</div>
							<div className="col-md-4">
								<Link to="/events" style={{ textDecoration: "none" }}>
									<div className="card mb-4">
										<svg className="bd-placeholder-img card-img-top" width="100%" height="225">
											<title>Placeholder</title>
										</svg>
										<div className="card-body">
											<p className="card-text">
												Meetup with us this weekend! Lets get together folks!
											</p>
											<div className="d-flex justify-content-between align-items-center">
												<div className="btn-group">
													<Link to="/meetups">
														<button
															type="button"
															className="btn btn-sm btn-outline-secondary">
															View Meetup
														</button>
													</Link>
													<Link to="/events">
														<button
															type="button"
															className="btn btn-sm btn-outline-secondary">
															Join Event!
														</button>
													</Link>
												</div>
												<small className="text-muted">9 mins</small>
											</div>
										</div>
									</div>
								</Link>
							</div>
							<div className="col-md-4">
								<Link to="/events" style={{ textDecoration: "none" }}>
									<div className="card mb-4">
										<svg className="bd-placeholder-img card-img-top" width="100%" height="225">
											<title>Placeholder</title>
										</svg>
										<div className="card-body">
											<p className="card-text">
												Meetup with us this weekend! Lets get together folks!
											</p>
											<div className="d-flex justify-content-between align-items-center">
												<div className="btn-group">
													<Link to="/meetups">
														<button
															type="button"
															className="btn btn-sm btn-outline-secondary">
															View Meetup
														</button>
													</Link>
													<Link to="/events">
														<button
															type="button"
															className="btn btn-sm btn-outline-secondary">
															Join Event!
														</button>
													</Link>
												</div>
												<small className="text-muted">9 mins</small>
											</div>
										</div>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
