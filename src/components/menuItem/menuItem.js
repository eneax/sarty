import React from 'react'
import { withRouter } from 'react-router-dom'

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menuItemStyles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />

    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem)





/*
* withRouter --> Higher Order Component (HOC)

- HOC is a function that takes a component as an argument and 
returns you a modified (powered-up) component

- it allows us to avoid the 'prop-drilling' issue,
where we'd have to pass props to a component just to pass it down again to another component.

- With 'withRouter', our MenuItem component has access to props.history, match and location
*/
