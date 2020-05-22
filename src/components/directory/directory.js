import React from 'react';

import SECTIONS_DATA from './sectionsData';
import './directoryStyles.scss';
import MenuItem from '../menuItem/menuItem';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directoryMenu">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
