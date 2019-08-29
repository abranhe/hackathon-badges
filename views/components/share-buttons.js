import React, { Component } from "react";

export default class ShareButtons extends Component {
	render() {
		return (
			<div className="ShareButtons">
				<a
					className="social-action social-action_twitter"
					target="_blank"
					href={"https://twitter.com/intent/twee"}
					onClick={function(e) {
						e.stopPropagation();
					}}
				>
					<span>tweet</span>
				</a>
				<a
					className="social-action social-action_facebook"
					target="_blank"
					href={
						"https://www.facebook.com/sharer/sharer.php?u=" +
						encodeURIComponent(process.env.npm_package_homepage)
					}
					onClick={function(e) {
						e.stopPropagation();
						ga(
							"send",
							"social",
							"Facebook",
							"Share",
							process.env.npm_package_homepage
						);
					}}
				>
					<span>share</span>
				</a>
				<a
					className="social-action social-action_github"
					target="_blank"
					href="https://github.com/kogg/instant-logos/stargazers"
					onClick={function(e) {
						e.stopPropagation();
						ga(
							"send",
							"social",
							"GitHub",
							"Star",
							"https://github.com/kogg/instant-logos/stargazers"
						);
					}}
				>
					<span>star</span>
				</a>
			</div>
		);
	}
}