import React from 'react';
import PropTypes from 'prop-types';
import Badge from './badge';

function Hackathon({ hackathon, onClick }) {
  return (
    <a key={hackathon.path} onClick={onClick}>
      <li className="brand-logo brand-logo_collected brand-logo_considering">
        <div className="brand-logo__image flex-center">
          <img src={hackathon.more.thumbnail} alt={hackathon.name} />
          <div className="brand-logo-center">
            <img src={hackathon.more.logo} alt={hackathon.name} />
          </div>
        </div>
        <div className="brand-logo__ctas">
          <strong>{hackathon.name}</strong>
        </div>
        <div className="brand-logo__badge">
          <Badge path={hackathon.path} />
        </div>
      </li>
    </a>
  );
}

Hackathon.propTypes = {
  hackathon: PropTypes.object,
  onClick: PropTypes.func,
};

Hackathon.defaultProps = {
  hackathon: {},
  onClick: Function.prototype,
};

export default Hackathon;
