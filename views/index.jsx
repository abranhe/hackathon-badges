import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { GatewayProvider, GatewayDest } from "react-gateway";
import Layout from "./components/layout";
import Header from "./components/header";
import Footer from "./components/footer";

export default class HackathonBadges extends Component {
	render() {
		return (
			<GatewayProvider>
				<Layout>
					<Helmet
						title="HackathonBadges"
						meta={[
							{ name: "description", content: "Badges for any Hackathon" },
							// { property: 'og:image', content: (process.env.CDN_URL || process.env.npm_package_homepage) + '/facebeef.png' },
							// { property: 'og:url', content: process.env.npm_package_homepage },
							// { property: 'og:site_name', content: process.env.npm_package_title },
							// { property: 'og:title', content: process.env.npm_package_title },
							{
								property: "og:description",
								content: "Badges for any Hackathon"
							},
							// { name: 'twitter:title', content: process.env.npm_package_title },
							{
								name: "twitter:description",
								content: "Badges for any Hackathon"
							}
						]}
					/>
					<GatewayDest name="global" />
					<Header location={this.props.location} />
					{/* {this.props.children} */}
					<Footer />
					{/* {this.props.collection && <Collection />} */}
				</Layout>
			</GatewayProvider>
		);
	}
}
