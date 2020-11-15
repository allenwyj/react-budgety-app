import React, { useState, useRef } from 'react';
import { NoteSection } from './note.styles';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const Note: React.FC<Props> = props => {
  const note = props.value;
  const setNote = props.onChange;
  const refInput = useRef<HTMLInputElement>(null);

  // set note when user leaves the field
  const onBlur = () => {
    if (refInput.current !== null) {
      setNote(refInput.current.value);
    }
  };
  return (
    <NoteSection>
      <label>
        <span>Description</span>
        <input
          type="text"
          placeholder="describe your new transaction here"
          ref={refInput}
          defaultValue={note}
          onBlur={onBlur}
        />
      </label>
    </NoteSection>
  );
};

export default Note;
