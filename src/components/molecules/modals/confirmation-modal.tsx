/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import styled from 'styled-components/native';
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';
import { TextTransform, translate } from 'atoms/localized-label';
import Modal from 'react-native-modal';
import CustomText from 'atoms/text';
import Button from 'components/atoms/button';

interface IProps {
  onPressClose(): void;
  onLeavePress: () => void;
  visible: boolean;
  titleLocale?: string;
  subTitleLocale?: string;
  btnTextLocale?: string;
}

const Container = styled.View``;

const Content = styled.View`
  background-color: ${DEFAULT_THEME.cardGray};
  border-radius: 12px;
  padding-top: 20px;
  padding-horizontal: 20px;
  margin-horizontal: 25px;
`;

export const CustomButton = styled(Button)`
  width: 40%;
  border-radius: 50px;
  background-color: red;
  margin-horizontal: 10px;
  margin-top: 25px;
`;

const ButtonsRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 16px;
`;

const LeaveConfirmationModal = ({
  visible = false,
  onPressClose,
  onLeavePress,
  titleLocale = 'leaveAIComposer',
  subTitleLocale = 'progressNotSaved',
}: IProps) => {
  const closeModal = () => {
    onPressClose();
  };

  const onConfirmationPress = () => {
    closeModal();
    onLeavePress();
  };

  return (
    <Modal
      hasBackdrop
      isVisible={visible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={{ width: '95%', alignSelf: 'center' }}
      onBackdropPress={closeModal}
      swipeDirection={null}
      onSwipeComplete={closeModal}>
      <Container>
        <Content>
          <CustomText
            size={Typography.FONT_SIZE_20}
            weight="600"
            style={{ marginBottom: 5 }}
            lineHeight={Typography.FONT_SIZE_28}
            color={DEFAULT_THEME.titleGray}>
            {translate(titleLocale, TextTransform.CAPITAL)}
          </CustomText>
          {subTitleLocale && (
            <CustomText
              size={Typography.FONT_SIZE_14}
              weight="600"
              lineHeight={Typography.FONT_SIZE_20}
              color={DEFAULT_THEME.titleGray}>
              {translate(subTitleLocale, TextTransform.CAPITAL)}
            </CustomText>
          )}
          <ButtonsRow>
            <CustomButton
              onPress={onConfirmationPress}
              title={translate('yes', TextTransform.CAPITALIZE)}
              style={{ backgroundColor: DEFAULT_THEME.primary }}
              textStyle={{ color: DEFAULT_THEME.black, fontWeight: '600' }}
            />
            <CustomButton
              onPress={closeModal}
              title={translate('cancel', TextTransform.CAPITALIZE)}
              style={{
                backgroundColor: DEFAULT_THEME.transparent,
                borderWidth: 1,
                borderColor: DEFAULT_THEME.dashGray,
              }}
              textStyle={{ color: DEFAULT_THEME.dashGray, fontWeight: '600' }}
            />
          </ButtonsRow>
        </Content>
      </Container>
    </Modal>
  );
};

export default LeaveConfirmationModal;
