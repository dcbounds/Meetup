import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.scss";
import Moment from "react-moment";

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
						return (
							<div className="container mx-auto">
								<div className="jumbotron jumbo text-center">
									<div className="jumbocontain mx-auto">
										<h1 className="jumbotron-heading">Testing Title...</h1>
										<a href="#" className="btn btn-light my-2">
											Join This Group!
										</a>
									</div>
								</div>
								<div className="container mx-auto">
									<div className="card pcard mx-auto">
										<h6 className="meetdeet" />
										<p> Testing Testing 123...</p>
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

Meetups.propTypes = {
	match: PropTypes.object
};
