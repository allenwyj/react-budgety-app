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
    //display: block;
    width: 100%;
    height: ${({ isHigher }) => (isHigher ? '100px' : '44px')};
    background: none;
    border: none;
  }

  @media screen and (max-height: 570px) {
    > input {
      height: 40px;
    }
  }
`;
