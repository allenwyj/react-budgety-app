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

  > p {
    font-size: 16px;
  }
`;

export const IconSpacer = styled.div`
  height: 24px;
  width: 24px;
`;

export const AppName = styled.h5`
  font-size: 20px;
  letter-spacing: 0.3em;
`;
