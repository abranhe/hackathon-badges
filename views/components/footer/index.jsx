import React, { Component } from "react";
import Popup from "../popup";

export default class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			popup: false
		};
	}

	onClose() {
		this.setState({ popup: false });
	}

	render() {
		return (
			<div className="footer">
				<div className="content-container">
					{this.state.popup && <Popup onClose={() => this.setState({ popup: false }).bind(this)} />}
					<div className="footer__top flex-spread">
						<div>
							<h4>{process.env.npm_package_title}</h4>
						</div>
						<div className="flex">
							<div className="footer__contributors">
								<span>Contributors: </span>
								<a href="https://www.maxcdn.com/" target="_blank">
									MaxCDN
								</a>
								{/* {this.props.sources.map(function(source) {
									return (
										<a href={source.url} key={source.shortname} target="_blank">{source.name || source.shortname}</a>
									);
								})} */}
								<a
									onClick={function(e) {
										e.preventDefault();
										this.setState({ popup: true });
									}.bind(this)}
								>
									...
								</a>
							</div>
							<div>
								<a
									className="footer__social-icon footer__social-icon_twitter"
									target="_blank"
									href="https://twitter.com/Instant_Logos"
								></a>
								<a
									className="footer__social-icon footer__social-icon_github"
									target="_blank"
									href="https://github.com/kogg/instant-logos"
								></a>
							</div>
						</div>
					</div>
					<div className="footer__bottom flex-spread">
						<div>
							<a className="terms-page" href="/terms.txt" target="_blank">
								Terms
							</a>
							<span>&nbsp; | &nbsp;</span>
							<span>copyright {new Date().getFullYear()}</span>
						</div>
						<div>
							<span>
								built by{" "}
								<a
									className="kogg-website"
									href={process.env.npm_package_author_url}
									target="_blank"
								>
									{process.env.npm_package_author_name}
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
