import React, { Component } from 'react';
import { NavLink, type NavLinkProps } from 'react-router-dom';

interface Props extends NavLinkProps {}

type State = {};

class NavItem extends Component<Props, State> {
  state = {};

  render() {
    return <NavLink {...this.props} />;
  }
}

export default NavItem;
