import React from 'react';
import Layout from '../shared/layout.page';
import day from 'dayjs';
import { GreetingBox, HomeLayoutContainer, DateBox } from './home.styles';

const HomePage: React.FC = () => {
  const todayDate = day(new Date()).format('DD MMM YYYY');

  return (
    <Layout pageName="Home">
      <HomeLayoutContainer>
        <GreetingBox>Good day~</GreetingBox>
        <DateBox>{todayDate}</DateBox>
        <p>开始记账吧</p>
      </HomeLayoutContainer>
    </Layout>
  );
};

export default HomePage;
