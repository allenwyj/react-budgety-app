import React from 'react';
import { ButtonContainer } from './button.styles';

interface Props {
  onClick: () => void;
  // 'Indexer'
  [x: string]: any;
}

const Button: React.FC<Props> = ({ onClick, children, ...otherProps }) => {
  return (
    <ButtonContainer onClick={onClick} {...otherProps}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
