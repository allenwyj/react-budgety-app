import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 24px;
  font-size: 20px;
  padding: 14px 20px;
  background: #f60;
  color: white;
  margin-bottom: 1px;

  > .icon {
    width: 24px;
    height: 24px;
    fill: white;
  }

  > h5 {
    font-size: 20px;
  }

  > p {
    font-size: 16px;
  }
`;
