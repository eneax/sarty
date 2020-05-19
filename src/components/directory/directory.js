import React from 'react'

import SECTIONS_DATA from "./sectionsData";
import './directoryStyles.scss'
import MenuItem from '../menuItem/menuItem'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections : SECTIONS_DATA,
    }
  }

  render() {
    return (
      <div className="directoryMenu">
        {this.state.sections.map(({id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory;