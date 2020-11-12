import React from 'react';
import styled from 'styled-components';
import Nav from '../components/nav/nav.component';

const PageContaniner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

type Props = any;

const Layout = (props: Props) => {
  return (
    <PageContaniner>
      <ContentContainer className={props.className}>
        {props.children}
      </ContentContainer>
      <Nav />
    </PageContaniner>
  );
};

export default Layout;
