import React from 'react';
import { Link } from 'react-router-dom';
import { useTags } from '../../useTags';

import Button from '../../components/button/button.component';
import Icon from '../../components/icon/icon.component';

import Layout from '../shared/layout.page';
import { CenterContainer } from '../../components/center-container/center-container.styles';
import { TagListContainer } from './tags-collection.styles';
import { SpaceDivider } from '../../components/space-divider/space-divider.styles';

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
        <SpaceDivider />
        <Button onClick={() => {}}>Add Tag</Button>
        <SpaceDivider />
      </CenterContainer>
    </Layout>
  );
}

export default TagsCollection;
