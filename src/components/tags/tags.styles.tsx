import styled from 'styled-components';

export const TagsSectionContainer = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  display: flex;
  /* If there is more space, give it to this element */
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: column;
  align-items: flex-start;
  overflow: auto;

  // removed scrollbar on tag section.
  &::-webkit-scrollbar {
    display: none;
  }

  /* > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-bottom: 8px;
  } */
`;

export const TagListContainer = styled.ol`
  //margin: 0 -12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(86px, 1fr));
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: auto;
  margin-top: 0;

  > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3px 16px;
    font-size: 10px;
    margin: 8px 10px;
    max-width: 80vw;

    > .icon {
      height: 24px;
      width: 24px;
      margin: 4px 0;
    }
    &.selectedExp {
      color: #f60;
      .icon {
        fill: #f60;
      }
    }

    &.selectedInc {
      color: #5fa0fa;
      .icon {
        fill: #5fa0fa;
      }
    }
  }
`;
