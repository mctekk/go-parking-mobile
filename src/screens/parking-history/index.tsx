// Modules
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Styles
import {
  ScreenHeader,
} from './styles';

// Organisms
import ViewContainer from 'components/organisms/view-container';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';

interface IParkingHistoryScreenProps {

}

const ParkingHistory = (props: IParkingHistoryScreenProps) => {

  // Props
  const { navigation } = props;

  return (
    <ViewContainer>

      <ScreenHeader
        title={translate('history', TextTransform.CAPITALIZE)}
        subtitle={translate('historyMsg', TextTransform.NONE)}
      />

    </ViewContainer>
  );
};

export default ParkingHistory;
