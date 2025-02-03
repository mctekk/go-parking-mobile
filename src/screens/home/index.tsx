/* eslint-disable react/no-unstable-nested-components */
// Modules
import React, { useContext, useEffect } from 'react';
import { Title } from 'react-native-paper';

// Icons
import MenuIcon from 'assets/icons/menu-icon';

// Context
import { AuthContext } from 'components/context/auth-context';
import { UserContext } from 'components/context/user-context';

// Atoms
import Button from 'components/atoms/button';
import { TextTransform, translate } from 'components/atoms/localized-label';

import BellV2 from 'assets/icons/bell';

// Styles
import {
  IconContainer,
  ScreenHeader,
} from './styles';

// Organisms
import ViewContainer from 'components/organisms/view-container';

// Interfaces
interface IHomeProps {
  navigation: any;
}

export const Home = (props: IHomeProps) => {
  // Props
  const { navigation } = props;

  // Context
  const { userData } = useContext(UserContext);

  useEffect(() => {
    // TESTING PURPOSES
    console.log('User Data:', userData);
  }, []);

  return (
    <ViewContainer>

      <ScreenHeader
        title={translate('home', TextTransform.CAPITALIZE)}
        subtitle={'Your Transactions at a Glance'}
      />

    </ViewContainer>
  );
};
