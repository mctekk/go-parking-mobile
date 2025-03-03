/* eslint-disable react-native/no-inline-styles */

// Modules
import React from 'react';
import styled from 'styled-components/native';
import { SvgUri } from 'react-native-svg';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';
import CustomText from 'atoms/text';
import { MasterCardIcon } from 'assets/icons';
//import { CardArrow } from 'assets/icons';

// Styles
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';

interface IPaymentMethodProps {
  onPress?: () => void;
  style?: any;
}

const Container = styled.View`
  width: 100%;
  border-color: ${DEFAULT_THEME.background};
`;

const CardContainer = styled.View`
  justify-content: center;
  background-color: ${DEFAULT_THEME.disabledPayment};
  padding-horizontal: 10px;
  padding-vertical: 7px;
  border-radius: 5px;
  margin-top: 10px;
`;

const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PaymentMethod = (props: IPaymentMethodProps) => {
  const { onPress, style } = props;

  const onCardPress = () => {
    onPress?.();
  };

  return (
    <Container onPress={onCardPress} style={style}>
      <CustomText
        size={Typography.FONT_SIZE_10}
        weight="700"
        color={DEFAULT_THEME.dashGray}>
        {translate('paymentMethod', TextTransform.CAPITALIZE)}
      </CustomText>
      <CardContainer>
        <LeftContainer>
          <MasterCardIcon />
          <CustomText
            size={Typography.FONT_SIZE_10}
            weight="500"
            style={{ marginLeft: 10 }}
            color={DEFAULT_THEME.dashGray}>
            {`**** 4242`}
          </CustomText>
        </LeftContainer>
      </CardContainer>
      {/* <CardArrow /> */}
    </Container>
  );
};

export default PaymentMethod;
