import styled from 'styled-components';

export const NavContainer = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;
  > ul {
    display: flex;

    > li {
      width: 33.333%;
      text-align: center;

      > a {
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        justify-content: center;
        align-items: center;

        .icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;
