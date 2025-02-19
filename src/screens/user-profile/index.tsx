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

interface IUserProfileProps {
  navigation: any;
}

const UserProfile = (props: IUserProfileProps) => {
  return (
    <ViewContainer>

      <ScreenHeader
        title={'User Profile'}
        subtitle={'This is your profile'}
      />

    </ViewContainer>
  );
};

export default UserProfile;
