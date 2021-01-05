import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Icon from '../icon/icon.component';
import { HeaderContainer, IconSpacer, AppName } from './header.styles';

const Header: React.FC<RouteComponentProps> = ({ history, match }) => {
  const goAddPage = () => {
    history.push(`/budget`);
  };

  return (
    <HeaderContainer>
      <Icon name="user" />
      <AppName>FINICS</AppName>
      {match.path !== '/budget' ? (
        <Icon name="add" onClick={goAddPage} />
      ) : (
        <IconSpacer />
      )}
    </HeaderContainer>
  );
};

export default withRouter(Header);
