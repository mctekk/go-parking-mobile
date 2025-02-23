/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */

// Modules
import React, { useCallback } from 'react';
import { FlatList } from 'react-native-gesture-handler';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';

// Molecules
import { SettingsItems } from 'components/molecules/settings-items';

// Styles
import {
  Container,
  Content,
  ScreenHeader,
  MainScreenHeader,
} from './styles';
import { DEFAULT_THEME } from 'styles/theme';

// Organisms
import ViewContainer from 'components/organisms/view-container';

// Icons
import BellV2 from 'assets/icons/bell';
import PasswordHideIcon from 'assets/icons/password-hide-icon';

// Interfaces
interface ISettingsProps {
  navigation: any;
}

const data = [
  {
    key: 1,
    name: translate('notifications', TextTransform.CAPITALIZE),
    goTo: '',
    icon: BellV2,
  },
  {
    key: 2,
    name: translate('password', TextTransform.CAPITALIZE),
    goTo: 'ChangePassword',
    icon: PasswordHideIcon,
  },
];

export const Settings = (props: ISettingsProps) => {
  // Props
  const { navigation } = props;

  const HeaderComponent = () => {
    return (
      <MainScreenHeader
        title={translate('settings', TextTransform.CAPITALIZE)}
        subtitle={translate('settingsMsg', TextTransform.NONE)}
      />
    );
  };

  const renderItem = useCallback(({ item }) => {
    return (
      <SettingsItems
        item_key={item.key}
        name={item.name}
        icon={item.icon}
        onItemPress={() => navigation.navigate(item.goTo)}
      />
    );
  }, []);

  const keyExtractor = useCallback(item => item.key.toString(), []);

  return (
    <ViewContainer
      headerChildren={<HeaderComponent />}
    >
      <Container>
        <ScreenHeader
          title={translate('settings', TextTransform.CAPITALIZE)}
          style={{ paddingHorizontal: 0, justifyContent: null }}
          titleProps={{ weight: '700', marginLeft: 10 }}
          backIconColor={DEFAULT_THEME.primary}
        />
        <Content>
          <FlatList
            data={data}
            extraData={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </Content>
      </Container>
    </ViewContainer>
  );
};
