import styled from 'styled-components';

export const LabelContainer = styled.label`
  display: flex;
  align-items: center;
  > span {
    margin-right: 16px;
    white-space: nowrap;
  }
  > input {
    display: block;
    width: 100%;
    height: 72px;
    background: none;
    border: none;
  }
`;
