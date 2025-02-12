/* eslint-disable react-native/no-inline-styles */
// Modules
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

// Styles
import {
  Container,
  ScreenHeader,
  Content,
  BottomButtonsContainer,
  BottomButton,
  TopContainer,
  MapContainer,
  Row,
  IconContainer,
  PaddingContainer,
} from './styles';
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';

// Organisms
import ViewContainer from 'components/organisms/view-container';

// Molecules
import CarSelectorButton from 'components/molecules/car-selector-button';
import TimeSelector from 'components/molecules/time-selector';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';
import CustomText from 'atoms/text';
import { CarIconOutline } from 'assets/icons';
import DollarIcon from 'assets/icons/dollar-icon';

interface IParkingBookingProps {
  navigation: any;
  route: any;
}

export const ParkingBooking = (props: IParkingBookingProps) => {
  // Props
  const { navigation, route } = props;

  // Params
  const sessionData = route?.params?.sessionData;

  // States
  const [timeSelected, setTimeSelected] = useState({});

  return (
    <ViewContainer>
      <SafeAreaView />
      <Container>
        <Content>
          <PaddingContainer>
            <ScreenHeader
              title={''}
              style={{ paddingHorizontal: 0, height: 90 }}
              titleProps={{}}
              backIconColor={DEFAULT_THEME.primary}
            />
            <MapContainer>
              <MapView
                style={styles.map}
                scrollEnabled={false}
                zoomEnabled={false}
                zoomTapEnabled={false}
                region={{
                  latitude: sessionData?.locations?.latitude,
                  longitude: sessionData?.locations?.longitude,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}
              />
            </MapContainer>
            <TopContainer>
              <CustomText
                size={Typography.FONT_SIZE_20}
                weight="700"
                color={DEFAULT_THEME.white}>
                {sessionData?.name}
              </CustomText>
              <CustomText
                size={Typography.FONT_SIZE_12}
                weight="500"
                style={{ marginVertical: 12 }}
                lineHeight={Typography.FONT_SIZE_14}
                color={DEFAULT_THEME.dashGray}>
                {sessionData?.street}
              </CustomText>
              <Row>
                <Row>
                  <IconContainer>
                    <DollarIcon />
                  </IconContainer>
                  <CustomText
                    size={Typography.FONT_SIZE_12}
                    weight="700"
                    style={{ marginRight: 20 }}
                    color={DEFAULT_THEME.white}>
                    {`${sessionData?.price?.amount} /hr`}
                  </CustomText>
                </Row>
                <Row>
                  <IconContainer>
                    <CarIconOutline
                      width={10}
                      height={9}
                      color={DEFAULT_THEME.black}
                    />
                  </IconContainer>
                  <CustomText
                    size={Typography.FONT_SIZE_12}
                    weight="700"
                    lineHeight={Typography.FONT_SIZE_14}
                    color={DEFAULT_THEME.white}>
                    {`${sessionData?.parkingsLeft} ${translate(
                      'available',
                      TextTransform.CAPITAL,
                    )}`}
                  </CustomText>
                </Row>
              </Row>
            </TopContainer>
            <CarSelectorButton disabled />
          </PaddingContainer>
          <TimeSelector
            selectedId={timeSelected?.id}
            onTimeSelected={setTimeSelected}
          />
        </Content>
        <BottomButtonsContainer>
          <CustomText
            size={Typography.FONT_SIZE_20}
            weight="700"
            style={{ marginRight: 30 }}
            color={DEFAULT_THEME.white}>
            {`$2.10`}
          </CustomText>
          <BottomButton
            onPress={() => {}}
            style={{
              backgroundColor: timeSelected?.id
                ? DEFAULT_THEME.primary
                : DEFAULT_THEME.darkPrimary,
            }}
            disabled={!timeSelected?.id}>
            <CustomText
              size={Typography.FONT_SIZE_16}
              weight="700"
              color={DEFAULT_THEME.black}>
              {translate('continue', TextTransform.CAPITALIZE)}
            </CustomText>
          </BottomButton>
        </BottomButtonsContainer>
      </Container>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 150,
    borderRadius: 20,
  },
});
