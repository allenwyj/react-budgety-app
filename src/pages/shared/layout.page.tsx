import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header/header.component';
import Nav from '../../components/nav/nav.component';

const PageContaniner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* For browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

type Props = {
  className?: string;
};

const Layout: React.FC<Props> = props => {
  return (
    <PageContaniner>
      <Header />
      <Main className={props.className}>{props.children}</Main>
      <Nav />
    </PageContaniner>
  );
};

export default Layout;
