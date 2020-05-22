import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './menuItemStyles.scss';

const MenuItem = ({ title, imageUrl, linkUrl, size, history, match }) => (
  <div
    className={`menuItem ${size}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="backgroundImage"
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(MenuItem);

/*
  * withRouter 
  - It's a higher order component (HOC)
  - It returns a MenuItem component with access to 'history', 'location', 'match'

  - 'history.push' is the equivalent of a React Router Link
  - 'match.url' matches whatever url we'll have up to the 'linkUrl' prop
*/
