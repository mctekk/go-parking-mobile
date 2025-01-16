/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
// Modules
import React, { useContext, useEffect, useState } from 'react';
import { Alert, Image, Platform } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

// Molcules
import TextInput from 'components/molecules/text-input';
import LoadingModal from 'components/molecules/modals/loading-modal';
import SignWithApple from 'components/molecules/sign-with-apple-button';
import SignWithFacebook from 'components/molecules/sign-with-facebook-button';
import SignWithGoogle from 'components/molecules/sign-with-google-button';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';

// Organisms
import { AuthContainer } from 'components/organisms/auth-container';

// Styles
import { Colors, Typography } from 'styles';
import {
  Container,
  Title,
  Content,
  Button,
  ForgotPasswordButton,
  SignUpButton,
  SignUpText,
  SocialContainer,
  LogoImage,
  SubTitle,
  InputsContainer,
  Wrapper,
  SocialTitle,
} from './styles';

// Services
import authService from 'core/services/auth-service';
import userService from 'core/services/user-service';

// Constants
import { AUTH_TOKEN } from 'utils/constants';

// Context
import { AuthContext } from 'components/context/auth-context';
import styled from 'styled-components/native';



// Interfaces
interface ISignInProps {
  navigation: any;
}

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().required(translate('fieldRequired', TextTransform.NONE)),
  password: yup
    .string()
    .required(translate('fieldRequired', TextTransform.NONE)),
});

export const SignIn = (props: ISignInProps) => {
  // Props
  const { navigation } = props;

  // States
  const [isLoading, setIsLoading] = useState(false);

  // Context
  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    console.log('Config:', Config.APP_CONFIG);
  }, []);

  const getUserData = async (token: string, refresh_token: string) => {
    try {
      const response = await userService.getUserData();
      signIn({ token, refresh_token, user: response });
      setIsLoading(false);
    } catch (error) {
      console.log('Get User Data Error:', error);
      setIsLoading(false);
      onLoginError();
    }
  };

  const handleSignIn = async (values: any) => {
    setIsLoading(true);
    try {
      const response = await authService.onSignIn(values);
      const { token, refresh_token } = response;
      await AsyncStorage.setItem(AUTH_TOKEN, token);
      getUserData(token, refresh_token);
    } catch (error) {
      console.log('Login Error:', error);
      setIsLoading(false);
      onLoginError();
    }
  };

  const onLoginError = () => {
    Alert.alert(
      translate('error', TextTransform.CAPITALIZE),
      translate('errorMsg', TextTransform.CAPITALIZE),
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
          <Title>{translate('login', TextTransform.CAPITALIZE)}</Title>
          <SubTitle>{translate('loginMsg', TextTransform.CAPITALIZE)}</SubTitle>
        </Wrapper>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => handleSignIn(values, actions)}>
          {props => (
            <InputsContainer>
              <TextInput
                placeholderText={translate('placeholderMail', TextTransform.CAPITALIZE)}
                onChangeText={props.handleChange('email')}
                error={props.errors.email}
                inputProps={{
                  keyboardType: 'email-address',
                  autoCapitalize: 'none',
                  value: props.values.email,
                }}
              />

              <TextInput
                placeholderText={translate('password', TextTransform.CAPITALIZE)}
                style={{ marginTop: 20 }}
                onChangeText={props.handleChange('password')}
                secureTextEntry={true}
                error={props.errors.password}
                inputProps={{
                  autoCapitalize: 'none',
                  value: props.values.password,
                }}
              />

              <ForgotPasswordButton
                title={translate('recoverPassword', TextTransform.CAPITALIZE)}
                onPress={() => navigation.navigate('ForgotPassword')}
                textStyle={{
                  color: 'rgba(0, 0, 0, 1)',
                  fontSize: Typography.FONT_SIZE_14,
                  alignSelf: 'flex-start',
                }}
              />

              <Button
                title={translate('login', TextTransform.CAPITALIZE)}
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


            </InputsContainer>
          )}
        </Formik>
      </Content>

      <SignUpButton onPress={() => navigation.navigate('SignUp')}>
        <SignUpText>
          {translate('notAMember', TextTransform.CAPITALIZE)} {' '}
          <SignUpText
            style={{ color: 'rgba(199, 165, 2, 1)', fontWeight: 'bold' }}
          >
            {translate('registerNow', TextTransform.CAPITALIZE)}
          </SignUpText>
        </SignUpText>
      </SignUpButton>

      <LoadingModal
        visible={isLoading}
        title={translate('signingIn', TextTransform.CAPITALIZE)}
      />
    </Container>

  );
};
