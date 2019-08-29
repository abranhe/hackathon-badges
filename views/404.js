import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { GatewayProvider, GatewayDest } from "react-gateway";
import Layout from "./components/layout";
import Header from "./components/not-found";
import Footer from "./components/footer";

export default class NotFound extends Component {
	render() {
		return (
			<GatewayProvider>
				<Layout>
					<Helmet
						title="404 No badge found"
						meta={[
							{ name: "description", content: "Badges for any Hackathon" },
							{
								property: "og:description",
								content: "Badges for any Hackathon"
							},
							{
								name: "twitter:description",
								content: "Badges for any Hackathon"
							}
						]}
					/>
					<GatewayDest name="global" />
					<Header />
				</Layout>
			</GatewayProvider>
		);
	}
}
