import React from 'react';
import { NewRecordItem } from '../../hooks/useRecords';
import { useTags } from '../../hooks/useTags';
import Icon from '../icon/icon.component';
import { RecordItemContainer } from './record-item.styles';
import day from 'dayjs';

interface Props {
  rec: NewRecordItem;
}

const RecordItem: React.FC<Props> = ({ rec }) => {
  const { findTag, capitalisedFirstLetter } = useTags();
  const tagId = rec.tagIds[0];
  const tag = findTag(tagId);
  const tagName = tag ? capitalisedFirstLetter(tag.name) : '';

  return (
    <RecordItemContainer
      to={'/transactions/' + rec.id}
      className="tags oneLine"
    >
      <Icon name={tag.name} />
      <div>
        {tagName}
        {rec.note && <div className="note oneLine">{rec.note}</div>}
      </div>
      <div>
        <div className="amount">${rec.amount}</div>
        <span className="time">{day(rec.createdAt).format('HH:mm')}</span>
      </div>
    </RecordItemContainer>
  );
};

export default RecordItem;
