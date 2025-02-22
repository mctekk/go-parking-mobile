/* eslint-disable react-native/no-inline-styles */
// Modules
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Styles
import {
  Container,
  HeaderView,
} from './styles';

// Organisms
import ViewContainer from 'components/organisms/view-container';

// Atoms
import UserProfileMenu from 'components/molecules/user-profile-menu';
import { UserContext } from 'components/context/user-context';
import { AuthContext } from 'components/context/auth-context';

interface IUserProfileProps {
  navigation: any;
}

const UserProfile = (props: IUserProfileProps) => {

  // Props
  const { navigation } = props;

  // Context
  const { userData } = useContext(UserContext);
  const { signOut } = useContext(AuthContext);

  const onOptionSelect = (option: string) => {
    switch (option) {
      case 'user':
        navigation.navigate('UserProfile');
        break;
      case 'car':
        navigation.navigate('CarProfile');
        break;
      case 'credit-card':
        navigation.navigate('CreditCardProfile');
        break;
      case 'settings':
        navigation.navigate('SettingsProfile');
        break;
      default:
        break;
    }
  };

  const onUserLogout = () => {
    signOut();
  };

  return (
    <Container>
      <HeaderView />
      <UserProfileMenu
        onUserLogout={onUserLogout}
        onOptionSelect={onOptionSelect}
      />
    </Container>
  );
};


export default UserProfile;
