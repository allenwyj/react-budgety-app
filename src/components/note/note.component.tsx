import React, { useState, useRef } from 'react';
import { NoteSection } from './note.styles';

const Note: React.FC = () => {
  const [note, setNote] = useState<string>('');
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
          defaultValue={note}
          onBlur={onBlur}
        />
      </label>
    </NoteSection>
  );
};

export default Note;
