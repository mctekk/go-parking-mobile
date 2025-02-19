/* eslint-disable react-native/no-inline-styles */
// Modules
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Styles
import {
  Container,
  ScreenHeader,
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
import ParkingList from 'components/organisms/parking-list';
import { ActivityIndicator } from 'react-native-paper';

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

export const AllParkings = (props: IParkingBookingProps) => {

  // Props
  const {
    navigation,
    route,
  } = props;

  const [loading, setLoading] = useState(true);

  useState(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000, []);
  }, []);

  return (
    <ViewContainer
      headerViewStyles={{
        paddingTop: 80,
      }}
    >
      <SafeAreaView />
      <Container>
        <ScreenHeader
          title={translate('nearbyPark', TextTransform.CAPITALIZE)}
          style={{ paddingHorizontal: 0, justifyContent: null }}
          titleProps={{ weight: '700', marginLeft: 10 }}
          backIconColor={DEFAULT_THEME.primary}
        />

        {loading ? (
          <ActivityIndicator
            size="large"
            color={DEFAULT_THEME.primary}
          />
        ) : (
          <ParkingList
            showAll={true}
            navigation={navigation}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}

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

export default AllParkings;
