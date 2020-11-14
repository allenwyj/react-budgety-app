import styled from 'styled-components';

export const TagsSectionContainer = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  /* If there is more space, give it to this element */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

export const TagListContainer = styled.ol`
  margin: 0 -12px;
  > li {
    background: #d9d9d9;
    border-radius: 18px;
    display: inline-block;
    padding: 3px 18px;
    font-size: 14px;
    margin: 8px 12px;

    &.selected {
      background: #f60;
    }
  }
`;
