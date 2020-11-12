import React from 'react';
import styled from 'styled-components';
import Layout from '../layout.page';

const TagsSectionContainer = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

const TagListContainer = styled.ol`
  margin: 0 -12px;
  > li {
    background: #d9d9d9;
    border-radius: 18px;
    display: inline-block;
    padding: 3px 18px;
    font-size: 14px;
    margin: 8px 12px;
  }
`;

const NotesSection = styled.section``;
const CategoriesSection = styled.section``;
const NumberPadSection = styled.section``;

function Budget() {
  return (
    <Layout>
      <TagsSectionContainer>
        <TagListContainer>
          <li>Shopping</li>
          <li>Food</li>
          <li>Accomodation</li>
          <li>Transport</li>
        </TagListContainer>
        <button>new tag</button>
      </TagsSectionContainer>
      <NotesSection>
        <label>
          <span>Description</span>
          <input type="text" />
        </label>
      </NotesSection>
      <CategoriesSection>
        <ul>
          <li>Expense</li>
          <li>Income</li>
        </ul>
      </CategoriesSection>
      <NumberPadSection>
        <div>100</div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>Delete</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>c</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Budget;
