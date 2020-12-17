import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../icon/icon.component';
import { HeaderContainer } from './header.styles';

const IconSpacer = styled.div`
  height: 24px;
  width: 24px;
`;

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
        <IconSpacer />
      )}
    </HeaderContainer>
  );
};

export default withRouter(Header);
