import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/meetups.scss";
import Moment from "react-moment";
import Meetupcard from "../component/meetupcard.js";

export class Meetups extends React.Component {
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
						let meetID = this.props.match.params.meetid;
						let meetObj = actions.findMeetups(meetID);
						let meet = actions.findMeetupEvents(meetID);
						if (meet.length > 0) {
							return (
								<div className="container mx-auto">
									<div className="jumbotroncard p-4 p-md-5 text-white">
										<div className="col-md-6 px-0">
											<h1 className="posttitle">{meetObj.post_title}</h1>
											<h4 className="location">Miami, FL</h4>
											<br />
											<p className=" my-3">
												Multiple lines of text that form the lede, informing new readers quickly
												and efficiently about what’s most interesting in this groups contents.
											</p>
											<p className=" mb-0">
												<a href="#" className="text-white btn btn-light my-2">
													Join This Group!!
												</a>
											</p>
										</div>
									</div>
									<div className="allmeetcontent">
										<div clssName="meetupmain">
											<div className="mainmeetcard">
												<div className="card-body">
													<h4 className="font-bold ">Group Details</h4> <br />
													<h6 className="font-bold card-title text-muted">
														{meetObj.post_title}
													</h6>
													<p className="card-text">
														{meetObj.post_content}. Multiple lines of text that form the
														lede, informing new readers quickly and efficiently about what’s
														most interesting in this groups contents.
													</p>
													<br />
													<a href="#" className="btn btn-primary">
														Join Group
													</a>
												</div>
											</div>
											<Meetupcard meetID={this.props.match.params.meetid} />
										</div>
										<div className="meetupsidebar">
											<div className="sidebartext bg-light">
												<h4 className="font-bold">About</h4>
												<p className="mb-0">
													Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis
													consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
													sed consectetur.
												</p>
											</div>

											<div className="sidebartext">
												<h4 className="font-italic">Meetup Archives</h4>
												<ol className="list-unstyled mb-0">
													<li>
														<a href="#">March 2019</a>
													</li>
													<li>
														<a href="#">February 2019</a>
													</li>
													<li>
														<a href="#">January 2019</a>
													</li>
													<li>
														<a href="#">December 2018</a>
													</li>
													<li>
														<a href="#">November 2018</a>
													</li>
													<li>
														<a href="#">October 2018</a>
													</li>
													<li>
														<a href="#">September 2018</a>
													</li>
													<li>
														<a href="#">August 2018</a>
													</li>
													<li>
														<a href="#">July 2018</a>
													</li>
													<li>
														<a href="#">June 2018</a>
													</li>
													<li>
														<a href="#">May 2018</a>
													</li>
													<li>
														<a href="#">April 2018</a>
													</li>
												</ol>
											</div>

											<div className="sidebartext">
												<h4 className="font-bold">Social</h4>
												<ol className="list-unstyled">
													<li>
														<a href="#">GitHub</a>
													</li>
													<li>
														<a href="#">Twitter</a>
													</li>
													<li>
														<a href="#">Facebook</a>
													</li>
												</ol>
											</div>
										</div>
									</div>
								</div>
							);
						}
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
Meetups.propTypes = {
	match: PropTypes.object
};
