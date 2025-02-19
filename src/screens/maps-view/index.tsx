// Modules
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { FlatList } from 'react-native-gesture-handler';

// Styles
import { BottomContent, Container, Content, SearchContainer } from './styled';

// Molecules
import MapsSearch from 'components/molecules/maps-search';
import MapsParkingCards from 'components/molecules/maps-parking-card';

// Utils
import { Original_DummyData, parking_dummy_list } from 'utils/dummy-data';
import { IParkingProps } from 'core/interface/parking.interface';
import { useNavigation } from '@react-navigation/native';

interface IMapsViewProps {
  navigation: any;
}

const MapsView = (props: IMapsViewProps) => {

  const {
    navigation,
  } = props;

  // States
  const [keyword, setKeyword] = useState('');

  const handleSearch = useCallback((text: string) => {
    setKeyword(text);
  }, []);

  const handleClearText = useCallback(() => {
    setKeyword('');
  }, []);

  const onSubmitEditing = useCallback(() => {
    console.log('Search:', keyword);
  }, [keyword]);

  const onBookNowPress = (item: IParkingProps) => {
    navigation.navigate('ParkingBooking', {
      parking_id: item.id,
      location: item.coordinates,
      streetLocation: item.address,
      parkingName: item.name,
      occupiedParkingSpaces: item.occupiedParkingSpaces,
      totalParkingSpaces: item.totalParkingSpaces,
      price: item.price,
      isParkingPrivate: item.isPrivate,
    });
  };

  const renderItem = useCallback(({ item }) => {
    return (
      <MapsParkingCards
        id={item.id}
        title={item.name}
        street={item.address}
        location={item.coordinates}
        totalParkingSpaces={item.totalParkingSpaces}
        occupiedParkingSpaces={item.occupiedParkingSpaces}
        parkingHours={item.parkingHours}
        isParkingPrivate={item.isPrivate}
        price={item.price}
        isFromMaps={true}
        onBookNowPress={() => onBookNowPress(item)}
      />
    )
  }, []);

  const keyExtractor = useCallback((item: IParkingProps) => item.id, []);


  return (
    <Container>
      <MapView
        style={styles.map}
        provider={'google'}
        region={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />

      <SearchContainer>
        <MapsSearch
          keyword={keyword}
          handleSearch={handleSearch}
          handleClearText={handleClearText}
          onSubmitEditing={onSubmitEditing}
        />
      </SearchContainer>

      <BottomContent>
        <FlatList
          data={Original_DummyData.slice(0, 3)}
          extraData={Original_DummyData.slice(0, 3)}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal
          contentContainerStyle={{
            paddingLeft: 20,
            paddingBottom: 20,
          }}
        />
      </BottomContent>
    </Container>
  );
};

const styles = StyleSheet.create({
  map: {
    zIndex: -1,
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapsView;
