// Modules
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components/native';

// Styles
import { Colors, Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';

// Atoms
import Text from 'components/atoms/text';

// Icons
import BackArrow from 'assets/icons/back-arrow';

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

// Interfaces
interface ISettingsItemsProps {
  name: string;
  route: string;
  navigation: any;
  icon: any
  item_key: string;
  onItemPress: () => void;
}

export const SettingsItems = (props: ISettingsItemsProps) => {

  // Props
  const {
    navigation,
    name,
    icon,
    route,
    item_key,
    onItemPress,
  } = props;

  const Icon = icon;

  return (
    <ItemContainer
      onPress={() => onItemPress()}
    >
      <ItemWrapper>
        <ItemIconContainer>
          <Icon fill={DEFAULT_THEME.primary} />
        </ItemIconContainer>
        <ItemText>{name}</ItemText>
      </ItemWrapper>
      <IconContainer>
        <BackArrow color={DEFAULT_THEME.primary} width={16} height={16} />
      </IconContainer>
    </ItemContainer>
  );
};
