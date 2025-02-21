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

interface IMyVehiclesProps {
  navigation: any;
  route: {
    params: IBookingScreenParamsProps;
  };
}

interface IBookingScreenParamsProps {
  parking_id: number;
}

export const MyVehicles = (props: IMyVehiclesProps) => {
  // Props
  const { navigation, route } = props;
  const {} = route.params;

  return (
    <ViewContainer
      headerViewStyles={{
        paddingTop: 80,
      }}>
      <SafeAreaView />
      <Container>
        <ScreenHeader
          title={''}
          style={{ paddingHorizontal: 0, height: 90 }}
          titleProps={{ weight: '700', marginLeft: 10 }}
          backIconColor={DEFAULT_THEME.primary}
        />

        <Content>
          <VehiclesList />
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
