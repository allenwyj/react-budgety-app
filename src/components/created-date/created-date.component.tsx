import React, { ChangeEventHandler } from 'react';
import FormInput from '../form-input/form-input.component';
import { CreatedDateSection } from './created-date.styles';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const CreatedDate: React.FC<Props> = props => {
  const createdAt = props.value;

  // set created time
  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    props.onChange(e.target.value);
  };

  // datetime-local returns date in string - 'YYYY-MM-DDTHH:mm'
  return (
    <CreatedDateSection>
      <FormInput
        type="datetime-local"
        label="Date"
        value={createdAt}
        onChange={onChange}
      />
    </CreatedDateSection>
  );
};

export default CreatedDate;
