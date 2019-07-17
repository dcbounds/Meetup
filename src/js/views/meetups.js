import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
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
						let meetID = this.props.match.params.theid;
						let meetObj = actions.findMeetup(meetID);

						return (
							<div className="container mx-auto">
								<div className="jumbotron jumbo text-center">
									<div className="jumbocontain mx-auto">
										<h1 className="jumbotron-heading">{meetObj.post_title}</h1>
										<a href="#" className="btn btn-light my-2">
											Join This Group!
										</a>
									</div>
								</div>
								<div className="container mx-auto">
									<div className="card pcard mx-auto">
										<h6 className="meetdeet" />
										<p> {meetObj.post_content}</p>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
				<Meetupcard />

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
