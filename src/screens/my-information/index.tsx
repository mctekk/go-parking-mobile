/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import ViewContainer from 'components/organisms/view-container';
import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet } from 'react-native';

// Styles
import {
  ScreenMainHeader,
  Content,
  Input,
  ScreenHeader,
  UserPictureContainer,
  UserPicture,
  ChangePictureButton,
  InputContainer,
  SummitButton,
} from './styles';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';

// Styles
import { DEFAULT_THEME } from 'styles/theme';
import { Typography } from 'styles';

// Context
import { UserContext } from 'components/context/user-context';

// Utils
import { DUMMY_PROFILE_PICTURE } from 'utils/constants';

interface IMyInformationProps {
  navigation: any;
}

const validationSchema = {
  name: yup.string().required(translate('nameRequired', TextTransform.NONE)),
  driveLicense: yup.string().required(translate('driveLicenseRequired', TextTransform.NONE)),
  email: yup.string().required(translate('emailRequired', TextTransform.NONE)),
};

const MyInformation = (props: IMyInformationProps) => {

  // Props
  const { navigation } = props;

  // Context
  const { userData } = useContext(UserContext);

  const initialValues = {
    name: `${userData?.firstname} ${userData?.lastname}`,
    driveLicense: '6996164',
    email: userData?.email,
  };

  const onEditProfile = (values: any, actions: any) => {
    console.log('values', values);
  };

  const HeaderComponent = () => {
    return (
      <ScreenMainHeader
        title={translate('myInformation', TextTransform.CAPITALIZE)}
        subtitle={translate('myInformationMsg', TextTransform.NONE)}
      />
    );
  };

  return (
    <ViewContainer headerChildren={<HeaderComponent />}>
      <ScreenHeader
        title={translate('editPersonalInfo', TextTransform.CAPITALIZE)}
        style={{ paddingHorizontal: 10, justifyContent: null }}
        titleProps={{ weight: '700', marginLeft: 10 }}
        backIconColor={DEFAULT_THEME.primary}
      />
      <Content>
        <UserPictureContainer>
          <UserPicture
            source={{ uri: DUMMY_PROFILE_PICTURE }}
            resizeMode='cover'
          />
          <ChangePictureButton
            title={translate('changeProfilePicture', TextTransform.CAPITALIZE)}
            onPress={() => { }}
            textStyle={{
              fontSize: Typography.FONT_SIZE_12,
              lineHeight: Typography.FONT_SIZE_18,
              weight: '500',
            }}
          />
        </UserPictureContainer>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => onEditProfile(values, actions)}>
          {props => (
            <InputContainer>
              <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps='handled'
              >
                <Input
                  labelText={translate('fullName', TextTransform.CAPITALIZE)}
                  labelStyle={styles.labelStyle}
                  onChangeText={props.handleChange('name')}
                  error={props.errors.name}
                  inputStyle={styles.inputStyle}
                  containerStyle={styles.containerStyle}
                  inputProps={{
                    autoCapitalize: 'none',
                    value: props.values.name,
                  }}
                />

                <Input
                  labelText={translate('driveLicense', TextTransform.CAPITALIZE)}
                  labelStyle={styles.labelStyle}
                  onChangeText={props.handleChange('driveLicense')}
                  error={props.errors.driveLicense}
                  inputStyle={styles.inputStyleDisable}
                  containerStyle={styles.containerStyleDisable}
                  editable={false}
                  inputProps={{
                    keyboardType: 'number',
                    autoCapitalize: 'none',
                    value: props.values.driveLicense,
                  }}
                />

                <Input
                  labelText={translate('emailAddress', TextTransform.CAPITALIZE)}
                  labelStyle={styles.labelStyle}
                  placeholderText={translate('placeholderMail', TextTransform.CAPITALIZE)}
                  onChangeText={props.handleChange('email')}
                  error={props.errors.email}
                  inputStyle={styles.inputStyle}
                  containerStyle={styles.containerStyle}
                  inputProps={{
                    keyboardType: 'email-address',
                    autoCapitalize: 'none',
                    value: props.values.email,
                  }}
                />
              </KeyboardAwareScrollView>

              <SummitButton
                title={translate('save', TextTransform.CAPITALIZE)}
                onPress={props.handleSubmit}
                textStyle={{
                  color: DEFAULT_THEME.black,
                  fontWeight: 'bold',
                }}
              />

            </InputContainer>
          )}
        </Formik>

      </Content>
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

export default MyInformation;
