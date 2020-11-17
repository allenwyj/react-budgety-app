import React from 'react';
import { useHistory } from 'react-router-dom';
import Icon from '../icon/icon.component';
import { TopBarWrapper } from './top-bar.styles';

const TopBar: React.FC = () => {
  const history = useHistory();

  const onClickBack = () => {
    history.goBack();
  };

  return (
    <TopBarWrapper>
      <Icon name="left" onClick={onClickBack} />
      <span>Edit Tag</span>
      <Icon />
    </TopBarWrapper>
  );
};

export default TopBar;
