import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/button/button.component';
import { CenterContainer } from '../../components/center-container/center-container.styles';
import FormInput from '../../components/form-input/form-input.component';
import { SpaceDivider } from '../../components/space-divider/space-divider.styles';
import TopBar from '../../components/top-bar/top-bar.component';
import { useTags } from '../../hooks/useTags';
import Layout from '../shared/layout.page';
import { InputWrapper } from './tag.styles';

type Params = {
  id: string;
};

const TagPage: React.FC = () => {
  const { findTag, updateTag, deleteTag } = useTags();
  let { id: idString } = useParams<Params>();
  const tag = findTag(parseInt(idString));

  // generate tag content only when the tag exists
  const generateContent = (tag: { id: number; name: string }) => (
    <div>
      <InputWrapper>
        <FormInput
          label="Tag Name"
          type="text"
          placeholder="Enter your tag name..."
          value={tag.name}
          onChange={e => {
            updateTag(tag.id, { name: e.target.value });
          }}
        />
      </InputWrapper>
      <CenterContainer>
        <SpaceDivider />
        <SpaceDivider />
        <SpaceDivider />
        <Button onClick={() => deleteTag(tag.id)}>Delete</Button>
      </CenterContainer>
    </div>
  );

  // TODO: onChange should be submitted when user clicks a submit button
  return (
    <Layout pageName={'Tag'}>
      <TopBar />
      {tag ? (
        generateContent(tag)
      ) : (
        <CenterContainer>These is no this tag</CenterContainer>
      )}
    </Layout>
  );
};

export default TagPage;
