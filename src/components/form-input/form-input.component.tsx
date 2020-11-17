import React from 'react';
import { LabelContainer } from './form-input.styles';

// inherit types from HTML input + 'label: string'
type Props = {
  label: string;
  isHigher?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormInput: React.FC<Props> = props => {
  // children is default value
  // we need to place label into another HTML element
  // and we put all the rest into input tag.
  const { label, children, isHigher, ...rest } = props;
  return (
    <LabelContainer isHigher={isHigher}>
      <span>{props.label}</span>
      <input {...rest} />
    </LabelContainer>
  );
};

export default FormInput;
