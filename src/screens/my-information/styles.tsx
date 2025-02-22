// Modules
import styled from 'styled-components/native';

// Styles
import { DEFAULT_THEME } from 'styles/theme';
import { Colors, Typography } from 'styles';

// Molecules
import MainHeader from 'components/molecules/main-header';
import Header from 'components/molecules/header';
import Button from 'components/atoms/button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TextInput from 'components/molecules/text-input';

export const Container = styled.View`
  flex: 1;
  background-color: ${DEFAULT_THEME.background};
`;

export const ScreenMainHeader = styled(MainHeader)`
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.SafeAreaView`
  flex: 1px;
`;

export const ScreenHeader = styled(Header)`

`;

export const UserPictureContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 16px;
`;

export const ChangePictureButton = styled(Button)`
  width: 40%;
  border-radius: 50px;
  margin-top: 0px;
  height: 35px;
  background-color: ${DEFAULT_THEME.background};
  border-color: ${DEFAULT_THEME.white};
  border-width: 1px;
  margin-left: 10px;
`;

export const UserPicture = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
`;

export const InputContainer = styled.View`
  padding: 20px;
  padding-top: 0px;
  flex: 1;
  background-color: ${DEFAULT_THEME.background};
`;

export const Input = styled(TextInput)`
  margin-top: 20px;
`;

export const SummitButton = styled(Button)`
  margin-top: 0px;
  margin-horizontal: 20px;
  height: 50px;
  background-color: ${DEFAULT_THEME.primary};
  position: absolute;
  bottom: 50px;
  width: 100%;
  align-self: center;
  border-radius: 50px;
`;