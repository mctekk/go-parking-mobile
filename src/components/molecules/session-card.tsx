/* eslint-disable react-native/no-inline-styles */

// Modules
import React from 'react';
import styled from 'styled-components/native';

// Atoms
import CustomText from 'atoms/text';
import { TextTransform, translate } from 'components/atoms/localized-label';

// Styles
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';
import { CarIconOutline, TimeIcon, LocationIcon } from 'assets/icons';
import { StyleSheet } from 'react-native';

interface ISessionCardProps {
  onPress?: () => void;
  order: any;
}

const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${DEFAULT_THEME.cardGray};
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const RowBetween = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
`;

const StreetName = styled(CustomText)`
  flex: 1;

`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ModelRow = styled.View`
  flex-direction: row;
  margin-top: 12px;
  margin-bottom: 20px;
`;

const IconContainer = styled.View`
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

const Separator = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: ${DEFAULT_THEME.dashGray};
`;

const Button = styled.TouchableOpacity`
  width: 48%;
  border-width: 1px;
  padding-vertical: 14px;
  align-items: center;
  border-radius: 50px;
`;

const SessionCard = (props: ISessionCardProps) => {
  const { onPress, order } = props;

  const onCardPress = () => {
    onPress?.();
  };

  return (
    <Container onPress={onCardPress}>
      <RowBetween
        style={{ marginBottom: 8 }}
      >
        <StreetName
          size={Typography.FONT_SIZE_14}
          weight="600"
          color={DEFAULT_THEME.titleGray}>
          {order?.name}
        </StreetName>
        <CustomText
          size={Typography.FONT_SIZE_18}
          weight="600"
          color={DEFAULT_THEME.titleGray}>
          {`$${order?.price?.amount}`}
        </CustomText>
      </RowBetween>

      <CustomText
        size={Typography.FONT_SIZE_12}
        weight="500"
        style={{}}
        lineHeight={Typography.FONT_SIZE_14}
        color={DEFAULT_THEME.dashGray}>
        {order?.street}
      </CustomText>

      <ModelRow>
        <Row style={{ width: '40%' }}>
          <IconContainer>
            <LocationIcon width={13} height={13} />
          </IconContainer>
          <CustomText
            size={Typography.FONT_SIZE_12}
            weight="600"
            lineHeight={Typography.FONT_SIZE_14}
            color={DEFAULT_THEME.titleGray}>
            1st Floor, P12
          </CustomText>
        </Row>
        <Row style={{ width: '60%' }}>
          <IconContainer>
            <CarIconOutline
              width={13}
              height={13}
              fill={DEFAULT_THEME.primary}
            />
          </IconContainer>
          <CustomText
            size={Typography.FONT_SIZE_12}
            weight="600"
            lineHeight={Typography.FONT_SIZE_14}
            color={DEFAULT_THEME.titleGray}>
            Tesla Model S
          </CustomText>
        </Row>
      </ModelRow>

      <Separator />

      <RowBetween
        style={styles.timeLeftRow}
      >
        <Row>
          <IconContainer>
            <TimeIcon />
          </IconContainer>
          <CustomText
            size={Typography.FONT_SIZE_12}
            weight="600"
            lineHeight={Typography.FONT_SIZE_14}
            color={DEFAULT_THEME.titleGray}>
            {translate('timeLeft', TextTransform.CAPITALIZE)}
          </CustomText>
        </Row>
        <CustomText
          size={Typography.FONT_SIZE_18}
          weight="600"
          color={DEFAULT_THEME.darkPrimary}>
          20m 50s
        </CustomText>
      </RowBetween>

      <RowBetween>
        <Button
          style={styles.remindButton}
        >
          <CustomText
            size={Typography.FONT_SIZE_16}
            weight="700"
            color={DEFAULT_THEME.dashGray}>
            {translate('remindMe', TextTransform.CAPITALIZE)}
          </CustomText>
        </Button>
        <Button
          style={styles.manageButton}
          onPress={onCardPress}
        >
          <CustomText
            size={Typography.FONT_SIZE_16}
            weight="700"
            color={DEFAULT_THEME.black}>
            {translate('manage', TextTransform.CAPITALIZE)}
          </CustomText>
        </Button>
      </RowBetween>

    </Container>
  );
};

const styles = StyleSheet.create({
  remindButton: {
    borderColor: DEFAULT_THEME.dashGray,
  },
  manageButton: {
    borderColor: DEFAULT_THEME.primary,
    backgroundColor: DEFAULT_THEME.primary,
  },
  timeLeftRow: {
    marginVertical: 20,
    alignItems: 'center',
  },
});

export default SessionCard;
