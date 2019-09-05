import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Hackathon from './hackathon';
import Popup from './popup';
import actions from '../store/actions';

class HackathonList extends Component {
  state = {
    popup: false,
    hackathon: {},
  };

  onClick(hackathon) {
    this.setState({ hackathon: hackathon, popup: true });
  }

  renderHeading() {
    return (
      <div className="logos__title">
        <h3>{this.props.heading}</h3>
      </div>
    );
  }

  renderPopup() {
    return (
      <Popup
        hackathonInfo={this.state.hackathon}
        onClose={() => {
          this.setState({ popup: false });
        }}
      />
    );
  }

  renderHackathons() {
    const { hackathons, setHeading, collapsed } = this.props;

    hackathons.length
      ? collapsed
        ? setHeading({ heading: 'Search results' })
        : setHeading({ heading: 'Popular hackathons' })
      : setHeading({ heading: 'Nothing found' });

    return (
      <div>
        {hackathons.map((hackathon) => (
          <Hackathon
            key={hackathon.path}
            hackathon={hackathon}
            onClick={() => this.onClick(hackathon)}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="logos">
        <div className="content-container">
          {this.state.popup && this.renderPopup()}
          <div>
            {this.props.heading && this.renderHeading()}
            <ul>{this.renderHackathons()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

HackathonList.propTypes = {
  hackathons: PropTypes.array,
};

HackathonList.defaultProps = {
  hackathons: [],
};

const mapDispatchToProps = (dispatch) => ({
  setHeading: bindActionCreators(actions.setHeading, dispatch),
});

const mapStateToProps = (state) => ({
  hackathons: state.search.hackathons,
  heading: state.search.heading,
  featuredHackathons: state.featuredHackathons,
  collapsed: state.collapsed,
});

export default connect(mapStateToProps, mapDispatchToProps)(HackathonList);
