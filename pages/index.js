import React from 'react';
import Head from 'next/head';
import Header from './components/header';
import Hackathons from './components/hackathon';
import Footer from './components/footer';

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
