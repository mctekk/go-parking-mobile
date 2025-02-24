// Modules
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { MarkerAnimated, PROVIDER_GOOGLE } from 'react-native-maps';
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
import { isAndroid } from 'utils/constants';

interface IMapsViewProps {
  navigation: any;
}

const MapsView = (props: IMapsViewProps) => {

  const {
    navigation,
  } = props;

  // States
  const [keyword, setKeyword] = useState('');
  const [markerCoordinate, setMarkerCoordinate] = useState({
    latitude: 0,
    longitude: 0,
  });

  // References
  const mapViewRef = useRef<MapView>(null);
  const item = useRef({});

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

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const firstItem = viewableItems[0].item;

      const newData = {
        ...firstItem,
        freeParkingSpaces: firstItem.totalParkingSpaces - firstItem.occupiedParkingSpaces,
      };

      item.current = newData;
      const newRegion = {
        latitude: parseFloat(firstItem.coordinates.latitude),
        longitude: parseFloat(firstItem.coordinates.longitude),
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      };
      mapViewRef.current?.animateToRegion(newRegion, 1000);
      setMarkerCoordinate({
        latitude: parseFloat(firstItem.coordinates.latitude),
        longitude: parseFloat(firstItem.coordinates.longitude),
      });
    }
  }, []);

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50
  }).current;


  return (
    <Container>
      <MapView
        style={styles.map}
        provider={'google'}
        ref={mapViewRef}
        loadingEnabled={true}
        showsUserLocation={true}
        initialRegion={{
          latitude: parseFloat(18.2208078),
          longitude: parseFloat(-67.3244534),
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <MarkerAnimated
          title={`$ ${item.current?.price?.amount.toString()} / ${item.current?.freeParkingSpaces} free`}
          image={require('assets/images/maps_marker.png')}
          coordinate={{
            latitude: markerCoordinate.latitude,
            longitude: markerCoordinate.longitude,
          }}
        />
      </MapView>

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
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          horizontal
          pagingEnabled={false}
          snapToInterval={isAndroid ? 370 : 370} // Adjust this value based on your card width + padding
          snapToAlignment="center"
          decelerationRate="fast"
          contentContainerStyle={{
            paddingLeft: 20,
            paddingBottom: 20,
          }}
          showsHorizontalScrollIndicator={false}
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
