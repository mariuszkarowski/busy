import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

module.exports = React.createClass({
  render() {
    const username = this.props.username;
    return (
      <ul className="app-nav">
        <li>
          <Link to={`/@${username}`} activeClassName="active">
            <i className="icon icon-md material-icons">assignment_ind</i>{' '}
            <span className="hidden-xs"><FormattedMessage id="profile" defaultMessage="Profile" /></span>
          </Link>
        </li>
        <li>
          <Link to={`/@${username}/posts`} activeClassName="active">
            <i className="icon icon-md material-icons">library_books</i>{' '}
            <span className="hidden-xs"><FormattedMessage id="posts" defaultMessage="Posts" /></span></Link>
        </li>
        <li>
          <Link to={`/@${username}/feed`} activeClassName="active">
            <i className="icon icon-md  material-icons">subject</i>{' '}
            <span className="hidden-xs"><FormattedMessage id="feed" defaultMessage="Feed" /></span></Link>
        </li>
        <li>
          <Link to={`/@${username}/transfers`} activeClassName="active">
            <i className="icon icon-md material-icons">account_balance_wallet</i>{' '}
            <span className="hidden-xs"><FormattedMessage id="wallet" defaultMessage="Wallet" /></span></Link>
        </li>
      </ul>
    );
  }
});