import React, { Component } from 'react';
import { Badges } from '../../badges';
import Popup from './popup';
import Badge from './badge';

export default class hackathon extends Component {
  constructor(props) {
    super(props);

    this.state.state = {
      popup: false,
      heading: 'Featured Hackathons',
      hackathon: {}
    };
  }

  render() {
    return (
      <div className="logos">
        <div className="content-container">
          {this.state.popup && (
            <Popup
              hackathonInfo={this.state.hackathon}
              onClose={() => {
                this.setState({ popup: false });
              }}
            />
          )}
          <div>
            {this.state.heading && (
              <div className="logos__title">
                <h3>{this.state.heading}</h3>
              </div>
            )}
            <ul>
              {Badges.map(badge => {
                return (
                  <a key={badge.path} onClick={() => this.setState({ hackathon: badge, popup: true })}>
                    <li className="brand-logo brand-logo_collected brand-logo_considering">
                      <div className="brand-logo__image flex-center">
                        <img src={badge.more.thumbnail} alt={badge.name} />
                      </div>
                      <div className="brand-logo__ctas">
                        <strong>{badge.name}</strong>
                      </div>
                      <div className="brand-logo__badge"><Badge path={badge.path} />
                      </div>
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
