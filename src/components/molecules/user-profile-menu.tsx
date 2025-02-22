/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */

// Modules
import React, { useCallback, useContext, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

// Icons
import { CarIcon } from 'assets/icons';
import BackArrow from 'assets/icons/back-arrow';
import CreditCardIcon from 'assets/icons/credit-card-icon';
import SettingsIcon from 'assets/icons/settings-icon';
import UserIcon from 'assets/icons/user-icon';

// Atoms
import Button from 'components/atoms/button';
import Text from 'components/atoms/text';

// Styles
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';
import { UserContext } from 'components/context/user-context';
import { TextTransform, translate } from 'components/atoms/localized-label';
import { DUMMY_PROFILE_PICTURE } from 'utils/constants';


interface UserProfileMenuProps {
  onOptionSelect?: (option: string) => void;
  onUserLogout?: () => void;
}

interface IListItmeProps {
  name: string;
  icon: SVGAElement;
  item_key: string;
  id: number;
  onItemPress: (key: string) => void;
}

const Container = styled.View`
  width: 90%;
  height: 85%;
  position: absolute;
  top: 75px;
  background-color: rgba(34, 34, 34, 1);
  margin-horizontal: 16px;
  align-self: center;
  border-radius: 20px;
  padding: 16px;
  justify-content: center;
`;

const TopContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled(Text)`
  font-size: ${Typography.FONT_SIZE_24}px;
  line-height: ${Typography.FONT_SIZE_26}px;
  color: ${DEFAULT_THEME.primary};
  font-weight: bold;
`;

const AuthorContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 26px;
  width: 100%;
  padding-bottom: 25px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(102, 102, 102, 1);
`;

const AuthorImage = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 60px;
  border-width: 3px;
  border-color: ${DEFAULT_THEME.primary};
  margin-bottom: 8px;
`;

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

const AuthorName = styled(Text)`
  font-size: ${Typography.FONT_SIZE_18}px;
  line-height: ${Typography.FONT_SIZE_22}px;
  color: ${DEFAULT_THEME.white};
  font-weight: bold;
  margin-top: 8px;
`;

const AuthorEmail = styled(Text)`
  font-size: ${Typography.FONT_SIZE_14}px;
  line-height: ${Typography.FONT_SIZE_18}px;
  color: ${DEFAULT_THEME.white};
  margin-top: 4px;
`;

const ItemContainer = styled.TouchableOpacity`
  padding: 12px 0;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 5px;
`;

const ItemWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ItemIconContainer = styled.View`
  width: 40px;
  height: 40px;
  background-color: rgba(66, 66, 66, 1);
  border-radius: 15px;
  margin-right: 16px;
  justify-content: center;
  align-items: center;
`;

const ItemText = styled(Text)`
  font-size: ${Typography.FONT_SIZE_16}px;
  line-height: ${Typography.FONT_SIZE_20}px;
  color: ${DEFAULT_THEME.white};
  font-weight: 600
`;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
  width: 34px;
  height: 34px;
`;

const LogoutContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;  
`;

const LogoutButton = styled(Button)`
  width: 100%;
  border-radius: 50px;
  margin-top: 0px;
`;

const profile_list = [
  {
    id: 1,
    key: 'user',
    name: translate('information', TextTransform.CAPITALIZE),
    icon: UserIcon,
  },
  {
    id: 2,
    key: 'credit-card',
    name: translate('myCards', TextTransform.CAPITALIZE),
    icon: CreditCardIcon,
  },
  {
    id: 3,
    key: 'car',
    name: translate('vehicles', TextTransform.CAPITALIZE),
    icon: CarIcon,
  },
  {
    id: 4,
    key: 'settings',
    name: translate('settings', TextTransform.CAPITALIZE),
    icon: SettingsIcon,
  },
];

const ListItme = (props: IListItmeProps) => {

  const {
    name,
    icon,
    item_key,
    onItemPress,
  } = props;

  const Icon = icon;

  return (
    <ItemContainer
      onPress={() => onItemPress(item_key)}
    >
      <ItemWrapper>
        <ItemIconContainer>
          <Icon fill={'#F8D73A'} />
        </ItemIconContainer>
        <ItemText>{name}</ItemText>
      </ItemWrapper>
      <IconContainer>
        <BackArrow color={DEFAULT_THEME.primary} width={16} height={16} />
      </IconContainer>
    </ItemContainer>
  );
};

export const UserProfileMenu = (props: UserProfileMenuProps) => {

  // Props
  const {
    onOptionSelect,
    onUserLogout,
  } = props;

  // Context
  const { userData } = useContext(UserContext);

  useEffect(() => {
    console.log(userData);
  }, []);

  const onItemPress = (key: string) => {
    onOptionSelect?.(key);
  };

  const renderItem = useCallback((item: IListItmeProps) => {
    return (
      <ListItme
        id={item.id}
        item_key={item.key}
        name={item.name}
        icon={item.icon}
        onItemPress={onItemPress}
      />
    );
  }, []);

  return (
    <Container>
      <TopContainer>
        <Title>{translate('account', TextTransform.CAPITALIZE)}</Title>
        <AuthorContainer>
          <AuthorImage
            source={{ uri: DUMMY_PROFILE_PICTURE }}
            resizeMode='cover'
          />
          <Wrapper>
            <AuthorName>{userData?.firstname} {userData?.lastname}</AuthorName>
            <AuthorEmail>{userData?.email}</AuthorEmail>
          </Wrapper>
        </AuthorContainer>
      </TopContainer>

      <FlatList
        data={profile_list}
        extraData={profile_list}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: 5,
        }}
      />

      <LogoutContainer>
        <LogoutButton
          title={'Logout'}
          onPress={onUserLogout}
          textStyle={{
            color: DEFAULT_THEME.black,
            fontWeight: 'bold',
          }}
        />
      </LogoutContainer>

    </Container>
  );
};

export default UserProfileMenu;
