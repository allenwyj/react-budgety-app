import styled from 'styled-components';

// passing a custom props
interface Props {
  readonly isHigher?: boolean;
}

export const LabelContainer = styled.label<Props>`
  display: flex;
  align-items: center;
  > span {
    margin-right: 16px;
    white-space: nowrap;
  }
  > input {
    display: block;
    width: 100%;
    height: ${({ isHigher }) => (isHigher ? '72px' : '44px')};
    background: none;
    border: none;
  }
`;
