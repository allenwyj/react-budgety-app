import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/button/button.component';
import Icon from '../../components/icon/icon.component';
import { useTags } from '../../useTags';
import Layout from '../shared/layout.page';

type Params = {
  id: string;
};
const Tag: React.FC = () => {
  const { findTag } = useTags();
  let { id } = useParams<Params>();
  const tag = findTag(parseInt(id));

  return (
    <Layout>
      <header>
        <Icon name="left" />
        <span>Edit Tag</span>
      </header>
      {tag ? <div>{tag.name}</div> : <div>Sorry, there is no this tag</div>}
      <div>
        <label>
          <span>Description</span>
          <input type="text" placeholder="Description" />
        </label>
      </div>
      <div>
        <Button>Edit Tag</Button>
      </div>
    </Layout>
  );
};

export default Tag;
