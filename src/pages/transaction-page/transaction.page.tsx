import React, { useEffect, useState } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import Button from '../../components/button/button.component';
import {
  ButtonWrapper,
  CenterContainer
} from '../../components/center-container/center-container.styles';
import CreatedDate from '../../components/created-date/created-date.component';
import FormInput from '../../components/form-input/form-input.component';
import { SpaceDivider } from '../../components/space-divider/space-divider.styles';
import TopBar from '../../components/top-bar/top-bar.component';
import { NewRecordItem, useRecords } from '../../hooks/useRecords';
import Layout from '../shared/layout.page';
import { InputWrapper, ContentWrapper } from './transaction.styles';

type Params = {
  id: string;
};

const TransactionPage: React.FC = () => {
  const { findRecord, updateRecord, deleteRecord } = useRecords();
  const history = useHistory();
  const [tempRecord, setTempRecord] = useState<NewRecordItem>();
  let { id: idString } = useParams<Params>();
  const record = findRecord(parseInt(idString));

  useEffect(() => {
    setTempRecord(record);
  }, [record]);

  // generate tag content only when the tag exists
  const generateContent = (record: NewRecordItem) => (
    <ContentWrapper>
      <p>
        <span>Category: </span>
        {record.category === '+' ? 'Income' : 'Expense'}
      </p>
      <p>
        <span>Amount: $</span>
        {record.amount}
      </p>
      <InputWrapper>
        <FormInput
          label="Description:"
          type="text"
          placeholder="Enter description..."
          value={record.note}
          onChange={e => {
            setTempRecord({ ...record, note: e.target.value });
          }}
        />
      </InputWrapper>
      <CreatedDate
        value={record.createdAt}
        onChange={e => {
          setTempRecord({ ...record, createdAt: e });
        }}
      />
      <CenterContainer>
        <SpaceDivider />
        <SpaceDivider />
        <SpaceDivider />
        <ButtonWrapper>
          <Button
            onClick={() => {
              updateRecord(record);
              history.goBack();
            }}
          >
            Update
          </Button>
          <Button
            onClick={() => {
              deleteRecord(record.id);
              history.goBack();
            }}
          >
            Delete
          </Button>
        </ButtonWrapper>
      </CenterContainer>
    </ContentWrapper>
  );

  return (
    <Layout noHeader>
      <TopBar />
      {tempRecord ? (
        generateContent(tempRecord)
      ) : (
        <CenterContainer>There is no this tag</CenterContainer>
      )}
    </Layout>
  );
};

export default TransactionPage;
