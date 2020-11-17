import React from 'react';
import Icon from '../icon/icon.component';
import { TopBarWrapper } from './top-bar.styles';

const TopBar: React.FC = () => {
  return (
    <TopBarWrapper>
      <Icon name="left" />
      <span>Edit Tag</span>
      <Icon />
    </TopBarWrapper>
  );
};

export default TopBar;
