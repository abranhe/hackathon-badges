import React, { Component } from 'react';
import _ from 'underscore';
import ShareButtons from './share-buttons';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      searchValue: ''
    };
  }

  focus(e) {
    if (!this.state.collapsed) {
      return;
    }

    e.preventDefault();
    this.refs.search.select();
    this.setState({ collapsed: true });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(e) {
    e.preventDefault();
    // This.setState({ collapsed: true });
    // this.props.dispatch(actions.search(this.refs.search.value));
    // this.setState({ searchValue: e.target.value });
  }

  renderForm() {
    return (
      <form method="GET" onSubmit={this.onSubmit.bind(this)}>
        <label>
          <i
            className="search-icon"
            onClick={function() {
              if (!this.state.collapsed) {
                return;
              }

              this.setState({ collapsed: false });
              this.props.dispatch(actions.search(''));
              this.refs.search.select();
              ga('send', 'event', 'Search', 'Clear', 'Search Icon');
            }.bind(this)}
          />
          <input
            ref="search"
            autoFocus
            className="search-input"
            defaultValue={this.state.searchValue}
            type="text"
            autoComplete="off"
            placeholder="Search a Hackathon"
            name="q"
            // OnClick={function(e) {
            // 	e.stopPropagation();
            // }}
            onChange={this.onChange.bind(this)}
          />
        </label>
      </form>
    );
  }

  render() {
    return (
      <div
        className={`header ${this.state.collapsed ? 'header_collapsed' : ''}`}
        onClick={function(e) {
          if (!this.state.collapsed) {
            return;
          }

          e.preventDefault();
          this.refs.search.select();
        }.bind(this)}
      >
        <div className="content-container">
          <div className="flex-spread">
            <a
              href="/"
              className="logo"
              onClick={function(e) {
                if (!this.state.collapsed) {
                  return;
                }

                e.preventDefault();
                this.setState({ collapsed: false });
                this.props.dispatch(actions.search(''));
                this.refs.search.select();
                ga('send', 'event', 'Search', 'Clear', 'Header Logo');
              }.bind(this)}
            />
            <ShareButtons />
          </div>
          <div className="header-content">
            <h1>Hackathon Badges</h1>
            <h2>Dynamic badges for all your Hackathons projects</h2>
            <div className="search-container">{this.renderForm()}</div>
          </div>
        </div>
      </div>
    );
  }
}
