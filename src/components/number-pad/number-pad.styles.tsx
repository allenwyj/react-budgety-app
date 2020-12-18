import styled from 'styled-components';

export const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    background: white;
    font-size: 20px;
    line-height: 48px;
    text-align: right;
    padding: 0 16px;
    /* in-box shadow, top and bottom  */
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
      inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }
  > .pad {
    > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      &.ok {
        height: 192px;
        float: right;
      }
      > .icon {
        height: 24px;
        width: 24px;
      }
      /* select the n th child */
      // 1
      &:nth-child(1) {
        background: #f2f2f2;
      }
      // 2 4
      &:nth-child(2),
      &:nth-child(5) {
        background: #e8e8e8;
      }
      // 357
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: #dedede;
      }
      //delete, 468c
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10),
      &:nth-child(12) {
        background: #d3d3d3;
      }
      // 90
      &:nth-child(11),
      &:nth-child(13) {
        background: #c9c9c9;
      }
      // ok
      &:nth-child(8) {
        background: #b5b5b5;
      }
      // .
      &:nth-child(14) {
        background: #bfbfbf;
      }
    }

    // for iphone 5
    @media screen and (max-height: 570px) {
      > button {
        height: 40px;

        &.ok {
          height: 80px;
        }
      }
    }
  }
`;
