import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/button/button.component';
import { CenterContainer } from '../../components/center-container/center-container.styles';
import FormInput from '../../components/form-input/form-input.component';
import TopBar from '../../components/top-bar/top-bar.component';
import { useTags } from '../../useTags';
import Layout from '../shared/layout.page';
import { InputWrapper } from './tag.styles';

type Params = {
  id: string;
};
const Tag: React.FC = () => {
  const { findTag } = useTags();
  let { id } = useParams<Params>();
  const tag = findTag(parseInt(id));

  return (
    <Layout>
      <TopBar />
      <InputWrapper>
        <FormInput
          label="Tag Name"
          type="text"
          placeholder="Enter your tag name..."
        />
      </InputWrapper>
      <CenterContainer>
        <Button>Edit Tag</Button>
      </CenterContainer>
    </Layout>
  );
};

export default Tag;
