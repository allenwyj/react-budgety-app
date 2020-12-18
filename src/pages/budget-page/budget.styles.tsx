import styled from 'styled-components';
import Layout from '../shared/layout.page';

// These css styles will be applied to Layout component,
// if any element of Layout component is specified with the props.className
export const LayoutContainer = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

export const CategoryWrapper = styled.div`
  background: #e8e8e8;
`;
