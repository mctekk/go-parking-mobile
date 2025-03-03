/* eslint-disable react-native/no-inline-styles */
// Modules
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// Styles
import {
  Container,
  ScreenHeader,
  Content,
  BottomButtonsContainer,
  BottomButton,
} from './styles';
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';

// Organisms
import ViewContainer from 'components/organisms/view-container';
import VehiclesList from 'components/organisms/vehicles-list';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';
import { isAndroid } from 'utils/constants';

interface IMyVehiclesProps {
  navigation: any;
  route: {
    params: IBookingScreenParamsProps;
  };
}

interface IBookingScreenParamsProps {
  parking_id: number;
  onVehiclePress?: (vehicle: object) => void;
}

export const MyVehicles = (props: IMyVehiclesProps) => {
  // Props
  const { navigation, route } = props;
  const onVehiclePress = route?.params?.onVehiclePress;

  return (
    <ViewContainer
      headerViewStyles={{
        paddingTop: isAndroid ? 50 : 80,
      }}>
      <SafeAreaView />
      <Container>
        <ScreenHeader
          title={translate('myVehicles', TextTransform.CAPITALIZE)}
          style={{ paddingHorizontal: 0, justifyContent: null }}
          titleProps={{ weight: '700', marginLeft: 10 }}
          backIconColor={DEFAULT_THEME.primary}
        />

        <Content>
          <VehiclesList onVehiclePress={onVehiclePress} />
        </Content>
        <BottomButtonsContainer>
          <BottomButton
            onPress={() => {}}
            style={{
              backgroundColor: DEFAULT_THEME.primary,
            }}
            title={translate('addNewVehicle', TextTransform.CAPITALIZE)}
            textStyle={{
              fontSize: Typography.FONT_SIZE_16,
              fontWeight: '700',
              color: DEFAULT_THEME.black,
            }}
          />
        </BottomButtonsContainer>
      </Container>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({});
