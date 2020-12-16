import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Icon from '../icon/icon.component';
import { HeaderContainer } from './header.styles';

const Header: React.FC<RouteComponentProps> = ({ history, match }) => {
  const goAddPage = () => {
    history.push(`/budget`);
  };

  return (
    <HeaderContainer>
      <Icon name="user" />
      <h5>Allen's Budgety</h5>
      {match.path !== '/budget' ? (
        <Icon name="add" onClick={goAddPage} />
      ) : (
        <div />
      )}
    </HeaderContainer>
  );
};

export default withRouter(Header);
