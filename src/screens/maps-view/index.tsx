// Modules
import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { FlatList } from 'react-native-gesture-handler';

// Styles
import { BottomContent, Container, Content, SearchContainer } from './styled';

// Molecules
import MapsSearch from 'components/molecules/maps-search';
import MapsParkingCards from 'components/molecules/maps-parking-card';

// Utils
import { parking_dummy_list } from 'utils/dummy-data';
import { IParkingProps } from 'core/interface/parking.interface';

interface IMapsViewProps {

}

const MapsView = (props: IMapsViewProps) => {

  const {
    navigation
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
      location: item.locations,
      parkingName: item.name,
      parkingAvailable: item.parkingsLeft,
      streetLocation: item.street,
      price: item.price,
      durationTime: item.duration_time,
    });
  };

  const renderItem = useCallback(({ item }) => {
    return (
      <MapsParkingCards
        id={item.id}
        title={item.name}
        street={item.street}
        location={item.locations}
        parkingLeft={item.parkingsLeft}
        duration_time={item.duration_time}
        price={item.price}
        tags={item.tags}
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
          data={parking_dummy_list}
          extraData={parking_dummy_list}
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
