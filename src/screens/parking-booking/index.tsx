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
  IconContainer,
  Title,
  Subtitle,
  IconsContainer,
  InfoWrapper,
  InfoText,
  InfoSubtext,
  PaddingContainer,
  PriceText,
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
import DollarIcon from 'assets/icons/dollar-icon';

// Interfaces
import {
  IParkingLocation,
  IParkingPrice,
} from 'core/interface/parking.interface';

interface IParkingBookingProps {
  navigation: any;
  route: {
    params: IBookingScreenParamsProps;
  };
}

interface IBookingScreenParamsProps {
  parking_id: number;
  location: IParkingLocation;
  parkingName: string;
  parkingAvailable: number;
  streetLocation: string;
  price: IParkingPrice;
  durationTime: number;
  type: string;
}

export const ParkingBooking = (props: IParkingBookingProps) => {
  // Props
  const { navigation, route } = props;
  const {
    parking_id,
    location,
    parkingName,
    parkingAvailable,
    streetLocation,
    price,
    durationTime,
    type = 'booking',
  } = route.params;

  // States
  const [timeSelected, setTimeSelected] = useState<{ id?: string }>({});

  const onBookPress = () => {
    navigation.navigate('TransactionDetails', {
      ...route.params,
      timeSelected,
      type,
    });
  };

  return (
    <ViewContainer>
      <SafeAreaView />
      <Container>
        <PaddingContainer>
          <ScreenHeader
            title={''}
            style={{ paddingHorizontal: 0, height: 90 }}
            titleProps={{}}
            backIconColor={DEFAULT_THEME.primary}
          />

          <Content>
            <MapContainer>
              <MapView
                style={styles.map}
                provider={'google'}
                scrollEnabled={false}
                zoomEnabled={false}
                zoomTapEnabled={false}
                region={{
                  latitude: location?.latitude,
                  longitude: location?.longitude,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}
              />
            </MapContainer>

            <TopContainer>
              <Title>{parkingName}</Title>
              <Subtitle>{streetLocation}</Subtitle>
              <IconsContainer>
                <InfoWrapper>
                  <IconContainer>
                    <DollarIcon />
                  </IconContainer>
                  <InfoText>{price.amount}</InfoText>
                  <InfoSubtext>/hr</InfoSubtext>
                </InfoWrapper>

                <InfoWrapper>
                  <IconContainer>
                    <DollarIcon />
                  </IconContainer>
                  <InfoText>{parkingAvailable}</InfoText>
                  <InfoSubtext>
                    {translate('available', TextTransform.NONE)}
                  </InfoSubtext>
                </InfoWrapper>
              </IconsContainer>
            </TopContainer>

            <CarSelectorButton disabled />

            <TimeSelector
              selectedId={timeSelected.id}
              onTimeSelected={setTimeSelected}
            />
          </Content>

          <BottomButtonsContainer>
            <PriceText>$2.10</PriceText>
            <BottomButton
              onPress={onBookPress}
              style={{
                backgroundColor: timeSelected.id
                  ? DEFAULT_THEME.primary
                  : DEFAULT_THEME.darkPrimary,
              }}
              disabled={!timeSelected.id}
              title={translate('continue', TextTransform.CAPITALIZE)}
              textStyle={{
                fontSize: Typography.FONT_SIZE_16,
                fontWeight: '700',
                color: DEFAULT_THEME.black,
              }}
            />
          </BottomButtonsContainer>

        </PaddingContainer>
      </Container>
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
});
