// Modules
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// Atoms
import Text from 'atoms/text';

// Styles
import { Colors, Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';
import { scaleSize } from 'styles/mixins';

// Icons
import BellV2 from 'assets/icons/bell';

// Utils
import { isAndroid } from 'utils/constants';

export interface IProps {
  title?: string;
  subtitle?: string;
  customHeader?: any;
  titleProps?: any;
  rightButtonComponent?: any;
  buttonTitleProps?: any;
  style?: object;
  onLeftButtonPress?: () => void;
  onBackDetail?: () => void;
  subtitleProps?: any;
  barStyle?: 'light-content' | 'dark-content';
}

const SCREEN_MARGIN = 15;
const HEADER_HEIGHT = !isAndroid ? 150 : scaleSize(80);
const HEADER_PADDING_TOP = !isAndroid ? 60 : 10;

const Container = styled.View`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding-bottom: ${SCREEN_MARGIN}px;
  padding-top: ${HEADER_PADDING_TOP}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 20px;
`;

// @ts-ignore
const Title = styled(Text)`
  color: ${Colors.BLACK};
  font-size: ${Typography.FONT_SIZE_16}px;
  line-height: ${Typography.FONT_SIZE_20}px;
  width: 200px;
  padding-top: 10px;
  font-weight: bold;
`;

const SubTitle = styled(Text)`
  color: ${Colors.BLACK};
  font-size: ${Typography.FONT_SIZE_10}px;
  line-height: ${Typography.FONT_SIZE_12}px;
  padding-top: 5px;
`;

const CustomHeader = styled.View`
  position: absolute;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 100%;
  margin-horizontal: ${SCREEN_MARGIN}px;
  padding-bottom: ${SCREEN_MARGIN}px;
  z-index: -1;
`;

const IconContainer = styled.TouchableOpacity`
  height: ${scaleSize(45)}px;
  width: ${scaleSize(45)}px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${DEFAULT_THEME.background};
`;

const MainHeader = (props: IProps) => {

  // Props
  const {
    title,
    titleProps,
    subtitle,
    subtitleProps,
    customHeader,
    rightButtonComponent,
    onLeftButtonPress = () => navigation.goBack(),
    style,
    buttonTitleProps,
    onBackDetail,
    barStyle = isAndroid ? 'light-content' : 'dark-content',
  } = props;

  // Hooks
  const navigation = useNavigation();

  const onBackPress = () => {
    onLeftButtonPress();
    onBackDetail && onBackDetail();
  };

  const openNotifications = () => {
    navigation.navigate('Notifications');
  };


  return (
    <Container
      style={style}
    >
      <StatusBar barStyle={barStyle} />

      {customHeader ? (
        <CustomHeader>
          {customHeader}
        </CustomHeader>
      ) : (
        <TouchableWithoutFeedback
          {...buttonTitleProps}
        >
          <Title
            {...titleProps}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Title>
          <SubTitle
            {...subtitleProps}
          >
            {subtitle}
          </SubTitle>
        </TouchableWithoutFeedback>
      )}

      {rightButtonComponent ? (
        <>
          {rightButtonComponent}
        </>
      ) : (
        <IconContainer
          onPress={openNotifications}
        >
          <BellV2 />
        </IconContainer>
      )}
    </Container>
  );
};

export default MainHeader;
