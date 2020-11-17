import React from 'react';
import { ButtonContainer } from './button.styles';

const Button: React.FC = props => {
  return <ButtonContainer>{props.children}</ButtonContainer>;
};

export default Button;
