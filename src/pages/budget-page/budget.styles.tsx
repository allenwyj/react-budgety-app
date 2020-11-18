import styled from 'styled-components';
import Layout from '../shared/layout.page';

// These css styles will be applied to Layout component,
// if any element of Layout component is specified with the props.className
export const LayoutContainer = styled(Layout)`
  display: flex;
  flex-direction: column;
  border: 3px solid red;
`;

export const CategoryWrapper = styled.div`
  background: #c4c4c4;
`;
