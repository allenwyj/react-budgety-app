import styled from 'styled-components';

export const TagsSectionContainer = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  /* If there is more space, give it to this element */
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: auto;

  // removed scrollbar on tag section.
  &::-webkit-scrollbar {
    display: none;
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-bottom: 8px;
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
    max-width: 80vw;

    &.selected {
      background: #f60;
    }
  }
`;
