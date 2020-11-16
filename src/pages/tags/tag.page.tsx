import React, { useState } from 'react';
import { useTags } from '../../useTags';
import Layout from '../shared/layout.page';

function Tags() {
  const { tags, setTags } = useTags();

  return (
    <Layout>
      <h2>Tags</h2>
    </Layout>
  );
}

export default Tags;
