import React from 'react';
import PropTypes from 'prop-types';

function Badge({ path, template = 'flat-square' }) {
  return <img src={`/${path}?template=${template}`} />;
}

export default Badge;

Badge.propTypes = {
  path: PropTypes.string,
  template: PropTypes.string,
};

Badge.defaultProps = {
  path: '',
  template: 'flat-square',
};
