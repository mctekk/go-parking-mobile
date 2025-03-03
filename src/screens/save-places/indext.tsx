/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
// Modules
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Styles
import { ScreenHeader, Content } from './styles';

// Organisms
import ViewContainer from 'components/organisms/view-container';
import SavedList from 'components/organisms/saved-list';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';

interface ISavePlacesScreenScreenProps {}

const SavePlacesScreen = (props: ISavePlacesScreenScreenProps) => {
  // Props
  const { navigation } = props;

  const HeaderComponent = () => {
    return (
      <ScreenHeader
        title={translate('savedPlaces', TextTransform.CAPITALIZE)}
        subtitle={translate('savedPlacesMsg', TextTransform.NONE)}
      />
    );
  };

  return (
    <ViewContainer headerChildren={<HeaderComponent />}>
      <Content>
        <SavedList />
      </Content>
    </ViewContainer>
  );
};

export default SavePlacesScreen;
