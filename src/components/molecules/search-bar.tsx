/* eslint-disable react/no-unstable-nested-components */

import React, {
  forwardRef,
  useState,
} from 'react';
import {
  ReturnKeyType,
  TextInputProps,
  StyleProp,
} from 'react-native';
import styled from 'styled-components/native';
import is from 'styled-is';
import { Colors, Typography } from 'styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// Atoms
import Text from 'atoms/text';

// Constants
import { TextTransform, translate } from 'components/atoms/localized-label';
import { DEFAULT_THEME } from 'styles/theme';

// Icons
import CircularClose from 'assets/icons/circle-close';
import SearchIcon from 'assets/icons/search-icon';
import BackArrowV2 from 'assets/icons/back-arrow-v2';


interface IProps extends TextInputProps {
  onSubmit?: (item: string) => void;
  onSuggestionSelected?: (item: string) => void;
  returnKeyType?: ReturnKeyType;
  placeholder?: string;
  setOnSearching?: (value: boolean) => void;
  searchIconColor?: string;
  setType?: (value: string) => void;
  isButton?: boolean;
  onPress?: () => void;
  handleClearText?: () => void;
  searchContainerStyle?: StyleProp<any>;
  hasBackButton?: boolean;
  searchInputStyle?: StyleProp<any>;
}

const Container = styled.View`
  height: 40px;
`;

const SearchContainer = styled.View`
  padding-horizontal: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: ${props => props.isFocused ? '0px' : '0px'};
  border-radius: 15px;
  height: 40px;
  background-color: rgba(255, 255, 255, 1);
`;

const BackContainer = styled.TouchableOpacity`
  width: 30px;
  height: 90%;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.View`
  width: 30px;
  height: 90%;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  height: 40px;
  padding-left: 10px;
`;

const SearchInputButton = styled(TouchableOpacity)`
  margin-left: 8px;
  width: 280px;
  height: 90%;
  justify-content: center;
`;

const SeachBarInputButtonPlaceholder = styled(Text)`
  font-size: ${Typography.FONT_SIZE_13};
  line-height: ${Typography.FONT_SIZE_16};
  color: ${DEFAULT_THEME.primary};
`;

const CloseButton = styled.TouchableOpacity`
  padding-right: 16px;
  height: 25px;
  width: 25px;
  justify-content: center;
  position: absolute;
  right: 15px;
`;

const SearchBar = forwardRef((props: IProps, ref: any) => {

  // Props
  const {
    placeholder,
    searchIconColor = DEFAULT_THEME.text,
    isButton = false,
    handleClearText,
    searchContainerStyle,
    hasBackButton,
    searchInputStyle,
  } = props;

  // States
  const [isFocused, setIsFocused] = useState(false);

  // Hooks
  const navigation = useNavigation();

  const CloseComponent = () => (
    <CloseButton onPress={handleClearText}>
      <CircularClose
        height={18}
        circleColor={DEFAULT_THEME.text}
        iconColor={'white'}
      />
    </CloseButton>
  );

  const HandleSearchButton = () => {
    if (isButton) {
      return (
        <SearchInputButton>
          <SeachBarInputButtonPlaceholder
            numberOfLines={1}
          >
            {placeholder || translate('findParkingSpace', TextTransform.CAPITAL)}
          </SeachBarInputButtonPlaceholder>
        </SearchInputButton>
      );
    }
    return (
      <SearchInput
        placeholder={placeholder || translate('findParkingSpace', TextTransform.CAPITAL)}
        placeholderTextColor={'rgba(60, 60, 67, 0.6)'}
        autoCapitalize="none"
        onFocus={() => setIsFocused(true)}
        {...props}
      />
    );
  };

  return (
    <Container
      style={searchContainerStyle}
    >
      <SearchContainer
        isFocused={isFocused}
        style={searchInputStyle}
      >
        {hasBackButton && (
          <BackContainer
            onPress={() => navigation.goBack()}
          >
            <BackArrowV2 />
          </BackContainer>
        )}
        {HandleSearchButton()}
        <IconContainer>
          <SearchIcon
            fill={searchIconColor}
            height={22}
            width={22}
            viewBox="0 0 50 50"
          />
        </IconContainer>
        {/* {Boolean(value.length) && <CloseComponent />} */}
      </SearchContainer>
    </Container>
  );
});

export default SearchBar;
