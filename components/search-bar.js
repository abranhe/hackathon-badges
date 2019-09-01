import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onSubmit, onLogoClick, onChange, onClick, searchValue }) {
  return (
    <form method='GET' onSubmit={onSubmit}>
      <label>
        <i className='search-icon' onClick={onLogoClick} />
        <input
          autoFocus
          className='search-input'
          defaultValue={searchValue}
          type='text'
          autoComplete='off'
          placeholder='Search a Hackathon'
          name='q'
          onClick={onClick}
          onChange={onChange}
        />
      </label>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  onLogoClick: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  searchValue: PropTypes.string,
};

SearchBar.defaultProps = {
  onSubmit: Function.prototype,
  onLogoClick: Function.prototype,
  onChange: Function.prototype,
  onClick: Function.prototype,
  searchValue: '',
};

export default SearchBar;
