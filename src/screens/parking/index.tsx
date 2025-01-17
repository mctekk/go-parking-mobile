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

interface IParkingScreenProps {
  navigation: any;
}

const ParkingScreen = (props: IParkingScreenProps) => {

  // Props
  const { navigation } = props;

  return (
    <ViewContainer>

      <ScreenHeader
        title={translate('parkingSesion', TextTransform.CAPITALIZE)}
        subtitle={translate('parkingSesionMsg', TextTransform.NONE)}
      />

    </ViewContainer>
  );
};

export default ParkingScreen;
