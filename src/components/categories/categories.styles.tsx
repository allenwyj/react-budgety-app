import styled from 'styled-components';

export const CategoriesSection = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
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
  }
`;
