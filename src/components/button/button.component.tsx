import React from 'react';
import { ButtonContainer } from './button.styles';

type Props = { name: string };

const Button: React.FC<Props> = props => {
  return <ButtonContainer>{props.name}</ButtonContainer>;
};

export default Button;
