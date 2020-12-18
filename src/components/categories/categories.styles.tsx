import styled from 'styled-components';

export const CategoriesSection = styled.section`
  font-size: 18px;
  > ul {
    display: flex;
    justify-content: center;
    > li {
      width: 20%;
      text-align: center;
      padding: 16px 0;
      margin: 0 16px;
      /* 
        Create an underline without giving impact on other elements 
        Using border will take space and stretch the container.
      */
      position: relative;
      &.selected::after {
        content: '';
        display: block;
        height: 3px;
        background: #f60;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }

    @media screen and (max-height: 570px) {
      > li {
        padding: 8px 0px;
        margin: 0 8px;
      }
    }
  }
`;
