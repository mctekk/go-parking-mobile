/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
// Modules
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Styles
import { ScreenHeader, Content } from './styles';

// Organisms
import ViewContainer from 'components/organisms/view-container';
import HistoryList from 'components/organisms/history-list';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';

interface IParkingHistoryScreenProps { }

const ParkingHistory = (props: IParkingHistoryScreenProps) => {
  // Props
  const { navigation } = props;

  const HeaderComponent = () => {
    return (
      <ScreenHeader
        title={translate('history', TextTransform.CAPITALIZE)}
        subtitle={translate('historyMsg', TextTransform.NONE)}
      />
    );
  };

  return (
    <ViewContainer
      headerChildren={<HeaderComponent />}
    >
      <Content>
        <HistoryList />
      </Content>
    </ViewContainer>
  );
};

export default ParkingHistory;
