import styled from 'styled-components';

export const NavContainer = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;
  > ul {
    display: flex;

    > li {
      width: 33.333%;
      text-align: center;
      padding: 16px;
    }
  }
`;
