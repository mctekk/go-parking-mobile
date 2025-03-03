/* eslint-disable react-native/no-inline-styles */

// Modules
import React from 'react';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import * as yup from 'yup';

// Organisms
import ViewContainer from 'components/organisms/view-container';

// Utils
import { isAndroid } from 'utils/constants';

// Molecules
import Header from 'components/molecules/header';
import TextInput from 'components/molecules/text-input';

// Styles
import { DEFAULT_THEME } from 'styles/theme';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';
import Button from 'components/atoms/button';
import { Typography } from 'styles';


interface IAddCreditCardModalProps {
  visible: boolean;
  onClose: () => void;
}

const Container = styled.View`
  flex: 1;
  background-color: ${DEFAULT_THEME.background};
  border-radius: 25px;
  padding-horizontal: 20px;
`;

const ScreenHeader = styled(Header)`
  
`;

const Content = styled(KeyboardAwareScrollView)`
  flex-grow: 1;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const Input = styled(TextInput)`
  background-color: rgba(45, 45, 45, 1);
`;

const SummitButton = styled(Button)`
  position: absolute;
  bottom: 50px;
  width: 100%;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: rgba(68, 68, 68, 1);
  border-radius: 50px;
  border-width: 1px;
  border-color: rgba(170, 170, 170, 1);
  margin-top: 0px;
`;

const initialValues = {
  card_number: '',
  expiration_date: '',
  cvv: '',
};

const validationSchema = yup.object().shape({
  card_number: yup.string().required('Card number is required'),
  expiration_date: yup.string().required('Expiration date is required'),
  cvv: yup.string().required('CVV is required'),
});

export const AddCreditCardModal = (props: IAddCreditCardModalProps) => {

  // Props
  const {
    visible,
    onClose
  } = props;

  const onClosePressed = () => {
    onClose();
  };

  const onCardSummited = (values: any) => {
    console.log(values);
  };

  return (
    <Modal
      isVisible={visible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={{ margin: 0 }}
    >
      <ViewContainer
        headerViewStyles={{
          paddingTop: isAndroid ? 50 : 80,
        }}
      >
        <SafeAreaView />
        <Container>

          <ScreenHeader
            title={translate('addNewPaymentMethod', TextTransform.CAPITALIZE)}
            style={{ paddingHorizontal: 0, justifyContent: null }}
            titleProps={{ weight: '700', marginLeft: 10 }}
            backIconColor={DEFAULT_THEME.primary}
            closeButtonType="CLOSE"
            onLeftButtonPress={onClosePressed}
          />

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => onCardSummited(values, actions)}>
            {props => (
              <Content>
                <>
                  <Input
                    labelText='16 digits number'
                    labelStyle={{ color: 'rgba(66, 66, 66, 1)' }}
                    placeholderText={'**** **** **** 1234'}
                    onChangeText={props.handleChange('card_number')}
                    error={props.errors.card_number}
                    inputStyle={{
                      backgroundColor: 'rgba(45, 45, 45, 1)',
                    }}
                    containerStyle={{
                      backgroundColor: 'rgba(45, 45, 45, 1)',
                    }}
                    inputProps={{
                      keyboardType: 'numeric',
                      autoCapitalize: 'none',
                      value: props.values.card_number,
                    }}
                  />

                  <Wrapper>
                    <Input
                      labelText='Expiration date'
                      labelStyle={{ color: 'rgba(66, 66, 66, 1)' }}
                      placeholderText={'MM/YY'}
                      onChangeText={props.handleChange('expiration_date')}
                      error={props.errors.expiration_date}
                      inputStyle={{
                        backgroundColor: 'rgba(45, 45, 45, 1)',
                      }}
                      containerStyle={{
                        backgroundColor: 'rgba(45, 45, 45, 1)',
                        width: 158,
                      }}
                      inputProps={{
                        keyboardType: 'numeric',
                        autoCapitalize: 'none',
                        value: props.values.expiration_date,
                      }}
                    />

                    <Input
                      labelText='CVV/CVC'
                      placeholderText={'***'}
                      labelStyle={{ color: 'rgba(66, 66, 66, 1)' }}
                      onChangeText={props.handleChange('cvv')}
                      error={props.errors.cvv}
                      inputStyle={{
                        backgroundColor: 'rgba(45, 45, 45, 1)',
                      }}
                      containerStyle={{
                        backgroundColor: 'rgba(45, 45, 45, 1)',
                        width: 158,
                      }}
                      inputProps={{
                        keyboardType: 'numeric',
                        autoCapitalize: 'none',
                        value: props.values.cvv,
                      }}
                    />
                  </Wrapper>
                </>
              </Content>
            )}
          </Formik>
          <SummitButton
            title={translate('saveCard', TextTransform.CAPITALIZE)}
            onPress={onClose}
            textStyle={{
              color: 'rgba(170, 170, 170, 1)',
              fontSize: Typography.FONT_SIZE_16,
              fontWeight: '700',
            }}
          />
        </Container>
      </ViewContainer>
    </Modal>
  );
};