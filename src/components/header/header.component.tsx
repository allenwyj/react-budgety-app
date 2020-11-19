import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Icon from '../icon/icon.component';
import { HeaderContainer } from './header.styles';

interface Props {
  pageName: string;
}

const Header: React.FC<Props> = props => {
  return (
    <HeaderContainer>
      <Icon name="user" />
      <h5>Allen's Budgety</h5>
      <p>{props.pageName}</p>
    </HeaderContainer>
  );
};

export default Header;
