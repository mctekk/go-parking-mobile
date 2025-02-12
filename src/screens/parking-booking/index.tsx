/* eslint-disable react-native/no-inline-styles */
// Modules
import React from 'react';
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
  Title,
  Subtitle,
  CustomText,
  IconsContainer,
  InfoWrapper,
  InfoText,
  InfoSubtext,
  Wrapper,
} from './styles';
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';

// Organisms
import ViewContainer from 'components/organisms/view-container';

// Molecules
import CarSelectorButton from 'components/molecules/car-selector-button';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';
import { CarIconOutline } from 'assets/icons';
import DollarIcon from 'assets/icons/dollar-icon';
import { IParkingLocation, IParkingPrice } from 'core/interface/parking.interface';

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
  } = route.params;

  // Params
  const sessionData = route?.params?.sessionData;

  return (
    <ViewContainer>
      <SafeAreaView />
      <Container>
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
                <InfoSubtext>{translate('available', TextTransform.NONE)}</InfoSubtext>
              </InfoWrapper>
            </IconsContainer>
          </TopContainer>
          <CarSelectorButton disabled />
        </Content>
        <BottomButtonsContainer>
          <CustomText
            size={Typography.FONT_SIZE_20}
            weight="700"
            style={{ marginRight: 30 }}
            color={DEFAULT_THEME.white}>
            {`$2.10`}
          </CustomText>
          <BottomButton onPress={() => { }} style={styles.continueButton}>
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
  continueButton: {
    borderColor: DEFAULT_THEME.primary,
    backgroundColor: DEFAULT_THEME.primary,
  },
  map: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
});
