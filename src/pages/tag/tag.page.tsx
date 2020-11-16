import React from 'react';
import Icon from '../../components/icon/icon.component';
import { useTags } from '../../useTags';
import Layout from '../shared/layout.page';
import { Button, CenterContainer, Space, TagListContainer } from './tag.styles';

function Tags() {
  const { tags, setTags } = useTags();

  return (
    <Layout>
      <TagListContainer>
        {tags.map(tag => (
          <li key={tag}>
            <span className="oneLine">{tag}</span>
            <Icon name="right" />
          </li>
        ))}
      </TagListContainer>
      <CenterContainer>
        <Space />
        <Button>Add Tag</Button>
        <Space />
      </CenterContainer>
    </Layout>
  );
}

export default Tags;
