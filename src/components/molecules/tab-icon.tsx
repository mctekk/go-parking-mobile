/* eslint-disable @typescript-eslint/camelcase */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

// Styles
import { Colors } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';

// Utils
import { sendAmplitudeEvent } from 'utils';

// Context
import { UserContext } from 'components/context/user-context';
import KanvasLogo from 'assets/icons/kanvas-logo';
import TabHomeIcon from 'assets/icons/tab-home-icon';
import TabReceiptIcon from 'assets/icons/tab-receipt-icon';
import TabUserIcon from 'assets/icons/tab-user-icon';
import TabTimeIcon from 'assets/icons/tab-time-icon';
import TabBookmarkIcon from 'assets/icons/tab-bookmark-icon';

// Icons

interface IProps {
  name: string;
  focused: boolean;
}

const Button = styled.TouchableOpacity`
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  `;

const TabIcon = (props: IProps) => {

  const {
    name,
    focused,
  } = props;

  // Hooks
  const navigation = useNavigation();

  // Context
  const { userData } = useContext(UserContext)

  const tintColor = focused ? 'rgba(248, 215, 58, 1)' : 'rgba(170, 170, 170, 1)';

  switch (name) {
    case 'home':
      return (
        <TabHomeIcon
          fill={tintColor}
        />
      );
    case 'parkinghistory':
      return (
        <TabReceiptIcon
          fill={tintColor}
        />
      );
    case 'userprofile':
      return (
        <TabUserIcon
          fill={tintColor}
        />
      );
    case 'parkingscreen':
      return (
        <TabTimeIcon
          fill={tintColor}
        />
      );
    case 'saveplacesscreen':
      return (
        <TabBookmarkIcon
          fill={tintColor}
        />
      );
    default:
      return null;
  }
};

export default TabIcon;
