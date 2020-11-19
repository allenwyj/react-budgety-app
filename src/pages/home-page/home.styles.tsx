import styled from 'styled-components';

export const HomeLayoutContainer = styled.div`
  height: 150px;
  background: #f60;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 14px 20px;
  color: white;

  > p {
    line-height: 20px;
    font-size: 16px;
    padding: 10px 0;
  }
`;

export const GreetingBox = styled.p`
  align-self: flex-start;
`;

export const DateBox = styled.h3`
  padding: 10px 0;
  font-size: 28px;
`;
