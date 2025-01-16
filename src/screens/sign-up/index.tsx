/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
// Modules
import React, { useContext, useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Alert, Image, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';

// Api
import { client } from 'core/kanvas_client';

// Utils
import { AUTH_TOKEN } from 'utils/constants';

// Context
import { AuthContext } from 'components/context/auth-context';

// Core
import userService from 'core/services/user-service';

// Styles
import {
  Container,
  ScreenHeader,
  Content,
  Input,
  SubTitle,
  Title,
  Wrapper,
  InputsContainer,
  SocialContainer,
  SocialTitle,
  Button,
  SignUpButton,
  SignUpText,
} from './styles';
import { Typography } from 'styles';
import SignWithApple from 'components/molecules/sign-with-apple-button';
import SignWithFacebook from 'components/molecules/sign-with-facebook-button';
import SignWithGoogle from 'components/molecules/sign-with-google-button';
import authService from 'core/services/auth-service';

// Interfaces
interface ISignUpProps {
  navigation: any;
}

const initialValues = {
  email: '',
  password: '',
  password_confirmation: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().required(translate('fieldRequired', TextTransform.NONE)),
  password: yup
    .string()
    .required(translate('fieldRequired', TextTransform.NONE)),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required(translate('fieldRequired', TextTransform.NONE)),
});

export const SignUp = (props: ISignUpProps) => {
  // Props
  const { navigation } = props;

  // States
  const [isLoading, setIsLoading] = useState(false);

  // Context
  const { signUp } = useContext(AuthContext);

  const getUserData = async (token: string, refresh_token: string) => {
    try {
      const response = await userService.getUserData();
      signUp({ token, refresh_token, user: response });
      setIsLoading(false);
    } catch (error) {
      console.log('getUserData Error:', error);
    }
  };

  const handleRegistration = async (values: any, actions: any) => {
    setIsLoading(true);
    try {
      const response = await client.users.register(values);
      const { token, user } = response?.register;
      AsyncStorage.setItem(AUTH_TOKEN, token?.token);
      onRegisterSuccess(token?.token, token?.refresh_token);
    } catch (error) {
      console.log('Register Error:', error);
      onRegisterError();
      setIsLoading(false);
    }
  };

  const onRegisterSuccess = (token: string, refresh_token: string) => {
    Alert.alert(
      translate('success', TextTransform.CAPITALIZE),
      translate('registerSuccessMsg', TextTransform.CAPITALIZE),
      [
        {
          text: translate('ok', TextTransform.CAPITALIZE),
          onPress: () => getUserData(token, refresh_token),
        },
      ],
    );
  };

  const onRegisterError = () => {
    Alert.alert(
      translate('error', TextTransform.CAPITALIZE),
      translate('registerErrorMsg', TextTransform.CAPITALIZE),
    );
  };

  const onSocialLogin = async (provider: string, authToken: any) => {
    setIsLoading(true);
    try {
      const response = await authService.onSocialLogin(provider, authToken);
      const { token, refresh_token } = response.socialLogin;
      await AsyncStorage.setItem(AUTH_TOKEN, token);
      getUserData(token, refresh_token);
    } catch (error) {
      console.log('Social Login Error:', error);
      setIsLoading(false);
      throw new Error(`Social Login Error: ${error}`);
    }
  };

  return (
    <Container>

      <Image
        source={require('assets/images/go_parking_logo.png')}
        style={{
          width: 180,
          height: 180,
          alignSelf: 'center',
          marginTop: 50,
        }}
      />

      <Content>
        <Wrapper>
          <Title>{translate('createYourAccount', TextTransform.CAPITALIZE)}</Title>
        </Wrapper>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => handleRegistration(values, actions)}>
          {props => (
            <InputsContainer>
              <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50 }}>
                <Input
                  placeholderText={translate('placeholderMail', TextTransform.CAPITALIZE)}
                  onChangeText={props.handleChange('email')}
                  error={props.errors.email}
                  inputProps={{
                    keyboardType: 'email-address',
                    autoCapitalize: 'none',
                    value: props.values.email,
                  }}
                />

                <Input
                  placeholderText={translate('placeholderPassword', TextTransform.NONE)}
                  onChangeText={props.handleChange('password')}
                  error={props.errors.password}
                  secureTextEntry={true}
                  inputProps={{
                    autoCapitalize: 'none',
                    value: props.values.password,
                  }}
                />

                <Input
                  placeholderText={translate('passwordConfirmation', TextTransform.NONE)}
                  onChangeText={props.handleChange('password_confirmation')}
                  error={props.errors.password_confirmation}
                  secureTextEntry={true}
                  inputProps={{
                    autoCapitalize: 'none',
                    value: props.values.password_confirmation,
                  }}
                />

                <Button
                  title={translate('signUp', TextTransform.CAPITALIZE)}
                  onPress={props.handleSubmit}
                  disabled={isLoading}
                  style={{ marginTop: 10 }}
                  textStyle={{
                    color: 'rgba(0, 0, 0, 1)',
                    fontSize: Typography.FONT_SIZE_14,
                    fontWeight: '700',
                  }}
                />

                <SocialTitle>
                  {translate('orContinueWith', TextTransform.NONE)}
                </SocialTitle>

                <SocialContainer>

                  <SignWithGoogle
                    isSmall
                    onLogin={onSocialLogin}
                    style={{
                      borderWidth: 1,
                      borderColor: 'rgba(0, 0, 0, 0.08)',
                    }}
                  />

                  <SignWithFacebook
                    isSmall
                    onLogin={onSocialLogin}
                    style={{
                      borderWidth: 1.5,
                      borderColor: 'rgba(8, 102, 255, 1)',
                    }}
                  />

                  {Platform.OS === 'ios' && (
                    <SignWithApple
                      isSmall
                      onLogin={onSocialLogin}
                      style={{
                        borderWidth: 1.5,
                        borderColor: 'rgba(0, 0, 0, 1)'
                      }}
                    />
                  )}
                </SocialContainer>
              </KeyboardAwareScrollView>
            </InputsContainer>
          )}
        </Formik>
      </Content>

      <SignUpButton onPress={() => navigation.navigate('SignUp')}>
        <SignUpText>
          {translate('alreadyHaveAnAccount', TextTransform.CAPITALIZE)} {' '}
          <SignUpText
            style={{ color: 'rgba(199, 165, 2, 1)', fontWeight: 'bold' }}
          >
            {translate('login', TextTransform.CAPITALIZE)}
          </SignUpText>
        </SignUpText>
      </SignUpButton>

    </Container>
  );
};
