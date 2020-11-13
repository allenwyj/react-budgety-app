import React from 'react';
import { NotesSection } from './notes.styles';


const Notes: React.FC = () => {
  return (
    <NotesSection>
      <label>
        <span>Description</span>
        <input type="text" placeholder="describe your new transaction here" />
      </label>
    </NotesSection>
  );
};

export default Notes;
