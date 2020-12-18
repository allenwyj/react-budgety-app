import React, { ChangeEventHandler } from 'react';
import FormInput from '../form-input/form-input.component';
import { NoteSection } from './note.styles';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const Note: React.FC<Props> = props => {
  const note = props.value;

  // set note when user leaves the field
  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    props.onChange(e.target.value);
  };
  return (
    <NoteSection>
      <FormInput
        type="text"
        label="Description"
        placeholder="Type something..."
        value={note}
        onChange={onChange}
      />
    </NoteSection>
  );
};

export default Note;
