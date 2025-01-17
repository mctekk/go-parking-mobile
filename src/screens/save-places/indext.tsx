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

interface ISavePlacesScreenProps {
  navigation: any;
}

const SavePlacesScreen = (props: ISavePlacesScreenProps) => {

  // Props
  const { navigation } = props;

  return (
    <ViewContainer>

      <ScreenHeader
        title={translate('savedPlaces', TextTransform.CAPITALIZE)}
        subtitle={translate('savedPlacesMsg', TextTransform.NONE)}
      />

    </ViewContainer>
  );
};

export default SavePlacesScreen;
