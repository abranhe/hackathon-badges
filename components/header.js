import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../store/actions';
import ShareButtons from './share-buttons';
import SearchBar from './search-bar';
import Router from 'next/router';

class Header extends Component {
  state = {
    collapsed: false,
    searchValue: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    Router.push({
      pathname: '/',
      query: { q: this.props.searchValue },
    });

    this.props.search({ searchValue: this.props.searchValue });
  };

  onChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const { collapse, uncollapse, collapsed, search } = this.props;

    value ? (!collapsed ? collapse() : null) : uncollapse();

    search({ searchValue: value });
  };

  onLogoClick = () => {g
    if (!this.props.collapsed) {
      return;
    }

    this.props.uncollapse();
    // this.refs.search.select();
  };

  onClick = (e) => e.stopPropagation();

  render() {
    return (
      <div
        className={`header ${this.props.collapsed ? 'header_collapsed' : null}`}
        onClick={function(e) {
          if (!this.state.collapsed) {
            return;
          }

          e.preventDefault();
          // this.refs.search.select();
        }.bind(this)}>
        <div className='content-container'>
          <div className='flex-spread'>
            <a
              href='/'
              className='logo'
              onClick={function(e) {
                if (!this.state.collapsed) {
                  return;
                }

                e.preventDefault();
                // this.setState({ collapsed: false });
                // this.refs.search.select();
              }.bind(this)}
            />
            <ShareButtons facebook={false} />
          </div>
          <div className='header-content'>
            <h1>Hackathon Badges</h1>
            <h2>Dynamic badges for all your Hackathons projects</h2>
            <div className='search-container'>
              <SearchBar
                onSubmit={this.onSubmit}
                onLogoClick={this.onLogoClick}
                onClick={this.onClick}
                onChange={this.onChange}
                searchValue={this.props.searchValue}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  search: PropTypes.func,
  collapse: PropTypes.func,
  uncollapse: PropTypes.func,
  searchValue: PropTypes.string,
  collapsed: PropTypes.bool,
};

Header.defaultProps = {
  search: Function.prototype,
  collapse: Function.prototype,
  uncollapse: Function.prototype,
  searchValue: '',
  collapsed: false,
};

const mapDispatchToProps = (dispatch) => ({
  search: bindActionCreators(actions.search, dispatch),
  collapse: bindActionCreators(actions.collapse, dispatch),
  uncollapse: bindActionCreators(actions.uncollapse, dispatch),
});

const mapStateToProps = (state) => ({
  searchValue: state.search.value,
  collapsed: state.collapsed,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
