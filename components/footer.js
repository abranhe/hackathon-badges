import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { buildGithubIssue } from '../helpers';

function Footer({ hackathons }) {
  const footerStyle = `footer ${hackathons.length < 2
    ? 'footer-with-less-than-5-results'
    : ''}`;

  return (
    <div className={footerStyle}>
      <div className="content-container">
        <div className="footer__top flex-spread">
          <div className="flex">
            <div className="footer__contributors">
              <a target="_blank" href={buildGithubIssue}>
                <span>Submit a hackathon</span>
              </a>
            </div>
            <div>
              <a
                className="footer__social-icon footer__social-icon_github"
                target="_blank"
                href={buildGithubIssue}
              />
            </div>
          </div>
        </div>
        <div className="footer__bottom flex-spread">
          <div>
            <span>Hackathon Badges &copy; {new Date().getFullYear()}</span>
          </div>
          <div>
            <span>
              Created by{' '}
              <a
                className="abranhe-website"
                href="https://github.com/abranhe"
                target="_blank">
                @abranhe
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  hackathons: PropTypes.array,
};

Footer.defaultProps = {
  hackathons: [],
};

const mapStateToProps = (state) => ({
  hackathons: state.search.hackathons,
});

export default connect(mapStateToProps)(Footer);
