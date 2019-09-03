import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Hackathon from './hackathon';
import Popup from './popup';

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
    let hackathons = this.props.featuredHackathons;

    if (this.props.hackathons.length) {
      hackathons = this.props.hackathons;
    }

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
    const { popup } = this.state;

    return (
      <div className="logos">
        <div className="content-container">
          {popup && this.renderPopup()}
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

const mapStateToProps = (state) => ({
  hackathons: state.search.hackathons,
  heading: state.search.heading,
  featuredHackathons: state.featuredHackathons,
});

export default connect(mapStateToProps)(HackathonList);
