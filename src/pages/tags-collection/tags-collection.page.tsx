import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/icon/icon.component';
import { useTags } from '../../useTags';
import Layout from '../shared/layout.page';
import {
  Button,
  CenterContainer,
  Space,
  TagListContainer
} from './tags-collection.styles';

function TagsCollection() {
  const { tags, setTags } = useTags();

  return (
    <Layout>
      <TagListContainer>
        {tags.map(tag => (
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right" />
            </Link>
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

export default TagsCollection;
