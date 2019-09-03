import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { bindActionCreators } from 'redux';
import Head from 'next/head';
import Header from '../components/header';
import Hackathons from '../components/hackathons';
import Footer from '../components/footer';
import actions from '../store/actions';

function App({ collapse, uncollapse, collapsed, search }) {
  const router = useRouter();
  const { q: searchValue } = router.query;

  if (searchValue) {
    searchValue ? (!collapsed ? collapse() : null) : uncollapse();

    search({ searchValue });
  }

  return (
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
}

App.propTypes = {
  search: PropTypes.func,
  collapse: PropTypes.func,
  uncollapse: PropTypes.func,
  collapsed: PropTypes.bool,
};

App.defaultProps = {
  search: Function.prototype,
  collapse: Function.prototype,
  uncollapse: Function.prototype,
  collapsed: false,
};

const mapDispatchToProps = (dispatch) => ({
  search: bindActionCreators(actions.search, dispatch),
  collapse: bindActionCreators(actions.collapse, dispatch),
  uncollapse: bindActionCreators(actions.uncollapse, dispatch),
});

const mapStateToProps = (state) => ({
  collapsed: state.collapsed,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
