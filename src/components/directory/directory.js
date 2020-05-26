import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directorySelectors';

import './directoryStyles.scss';
import MenuItem from '../menuItem/menuItem';

const Directory = ({ sections }) => (
  <div className="directoryMenu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

Directory.propTypes = {
  sections: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Directory);
