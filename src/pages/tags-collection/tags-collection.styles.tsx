import styled from 'styled-components';

export const TagListContainer = styled.ol`
  font-size: 16px;
  background: white;
  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin: 0 16px;
    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0 12px 0;
    }
  }
`;
