/* eslint-disable react-native/no-inline-styles */
// Modules
import React, { useContext } from 'react';

// Styles
import {
  Container,
  HeaderView,
} from './styles';

// Atoms
import UserProfileMenu from 'components/molecules/user-profile-menu';

// Context
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
        navigation.navigate('MyVehicles');
        break;
      case 'credit-card':
        navigation.navigate('CreditCardProfile');
        break;
      case 'settings':
        navigation.navigate('Settings');
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
