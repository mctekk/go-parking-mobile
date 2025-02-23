/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
// Modules
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';

// Molecules
import LoadingModal from 'components/molecules/modals/loading-modal';

// Styles
import { DEFAULT_THEME } from 'styles/theme';
import {
  Container,
  ScreenHeader,
  Content,
  Input,
  Button,
} from './styles';

// Atoms
import CustomButton from 'components/atoms/button';
import { TextTransform, translate } from 'components/atoms/localized-label';

// Api
import { client } from 'core/kanvas_client';

// Context
import { AuthContext } from 'components/context/auth-context';
import { UserContext } from 'components/context/user-context';

// Organisms
import ViewContainer from 'components/organisms/view-container';

// Utils
import { isAndroid } from 'utils/constants';
import { Typography } from 'styles';


// Interfaces
interface IChangePasswordProps {
  navigation: any;
}

const initialValues = {
  current_password: '',
  new_password: '',
  new_password_confirmation: '',
};

const validationSchema = yup.object().shape({
  current_password: yup.string().required(translate('fieldRequired', TextTransform.NONE)),
  new_password: yup.string().required(translate('fieldRequired', TextTransform.NONE)),
  new_password_confirmation: yup
    .string()
    .oneOf([yup.ref('new_password')], 'Passwords do not match')
    .required(translate('fieldRequired', TextTransform.NONE)),
});

export const ChangePassword = (props: IChangePasswordProps) => {
  // States
  const [isLoading, setIsLoading] = useState(false);

  // Context
  const { userData } = useContext(UserContext);
  const { signOut } = useContext(AuthContext);

  const onUserLogout = async () => {
    signOut();
  };

  const updatePassword = async (values: any) => {
    setIsLoading(true);
    try {
      const response = await client.auth.changePassword(
        values.current_password,
        values.new_password,
        values.new_password_confirmation,
      );
      setIsLoading(false);
      Alert.alert('Success', 'Password updated successfully', [
        { text: 'OK', onPress: () => onUserLogout() },
      ]);
    } catch (error) {
      console.log('Error:', error);
      setIsLoading(false);
      Alert.alert('Error', 'An error occurred while updating your password');
    }
  };

  return (
    <ViewContainer
      headerViewStyles={{
        paddingTop: isAndroid ? 50 : 80,
      }}
    >
      <SafeAreaView />
      <Container>

        <ScreenHeader
          title={translate('changePassword', TextTransform.CAPITALIZE)}
          style={{ paddingHorizontal: 0, justifyContent: null }}
          titleProps={{ weight: '700', marginLeft: 10 }}
          backIconColor={DEFAULT_THEME.primary}
        />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => updatePassword(values, actions)}>
          {props => (
            <KeyboardAwareScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 50 }}>
              <Content>
                <Input
                  labelText={translate('currentPassword', TextTransform.CAPITALIZE)}
                  labelStyle={styles.labelStyle}
                  placeholderText={translate('currentPasswordPlaceHolder', TextTransform.CAPITALIZE)}
                  onChangeText={props.handleChange('current_password')}
                  inputStyle={styles.inputStyleDisable}
                  containerStyle={styles.containerStyleDisable}
                  error={props.errors.current_password}
                  secureTextEntry={true}
                  inputProps={{
                    autoCapitalize: 'none',
                    value: props.values.current_password,
                  }}
                />

                <Input
                  labelText={translate('newPassword', TextTransform.CAPITALIZE)}
                  labelStyle={styles.labelStyle}
                  placeholderText={translate('newPasswordPlaceHolder', TextTransform.CAPITALIZE)}
                  onChangeText={props.handleChange('new_password')}
                  inputStyle={styles.inputStyleDisable}
                  containerStyle={styles.containerStyleDisable}
                  error={props.errors.new_password}
                  secureTextEntry={true}
                  inputProps={{
                    autoCapitalize: 'none',
                    value: props.values.new_password,
                  }}
                />

                <Input
                  labelText={translate('confirmNewPassword', TextTransform.CAPITALIZE)}
                  labelStyle={styles.labelStyle}
                  placeholderText={translate('confirmNewPasswordPlaceHolder', TextTransform.CAPITALIZE)}
                  onChangeText={props.handleChange('new_password_confirmation')}
                  error={props.errors.new_password_confirmation}
                  inputStyle={styles.inputStyleDisable}
                  containerStyle={styles.containerStyleDisable}
                  secureTextEntry={true}
                  inputProps={{
                    autoCapitalize: 'none',
                    value: props.values.new_password_confirmation,
                  }}
                />

                <Button
                  title={translate('changePassword', TextTransform.CAPITALIZE)}
                  onPress={props.handleSubmit}
                  loading={isLoading}
                  disabled={isLoading}
                  textStyle={{
                    color: DEFAULT_THEME.black,
                    fontWeight: '700',
                  }}
                />
              </Content>
            </KeyboardAwareScrollView>
          )}
        </Formik>
      </Container>

      <LoadingModal
        visible={isLoading}
        title={translate('savingChanges', TextTransform.CAPITALIZE)}
      />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    color: 'rgba(170, 170, 170, 1)',
    fontSize: Typography.FONT_SIZE_16,
    lineHeight: Typography.FONT_SIZE_22,
    fontWeight: '700',
  },
  inputStyle: {
    backgroundColor: 'rgba(45, 45, 45, 1)',
    color: 'white',
  },
  containerStyle: {
    backgroundColor: 'rgba(45, 45, 45, 1)',
  },
  inputStyleDisable: {
    backgroundColor: 'rgba(68, 68, 68, 1)',
    color: 'rgba(170, 170, 170, 1)',
  },
  containerStyleDisable: {
    backgroundColor: 'rgba(68, 68, 68, 1)',
  },
});

export default ChangePassword;
