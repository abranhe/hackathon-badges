import React from 'react';
import Head from 'next/head';
import Header from './header';
import Hackathons from './hackathons';
import Footer from './footer';

export default () => (
  <div>
    <Head>
      <title>Hackathon Badges</title>
      <link href="./static/style.css" rel="stylesheet" />
      <link href="./static/github.css" rel="stylesheet" />
    </Head>
    <Header />
    <Hackathons />
    <Footer />
  </div>
);
