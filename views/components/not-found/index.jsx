import React, { Component } from "react";
import _ from "underscore";
import ShareButtons from "../share-buttons";

export default class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collapsed: false
		};
  }
  
	render() {
		return (
			<div
				className={`header ${this.state.collapsed ? "header_collapsed" : ""}`}
				onClick={function(e) {
					if (!this.state.collapsed) {
						return;
					}

					e.preventDefault();
					this.refs.search.select();
				}.bind(this)}
			>
				<div className="content-container">
					<div className="flex-spread">
						<a href="/" className="logo" />
						<ShareButtons />
					</div>
					<div className="header-content">
						<h1>404</h1>
						<h2>it looks like you are lost</h2>
					</div>
				</div>
			</div>
		);
	}
}
