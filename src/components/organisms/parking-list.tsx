// Modules
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';

// Molecules
import ParkingCard from 'components/molecules/parking-card';

// Interfaces
import { IParkingProps } from 'core/interface/parking.interface';

// Utils
import { Original_DummyData, parking_dummy_list } from 'utils/dummy-data';

interface Parking {
  id: string;
  name: string;
  location: string;
}

interface ParkingListProps {
  parkings: Parking[];
}

const ParkingList = (props: ParkingListProps) => {

  // Props
  const {
    parkings,
  } = props;

  // References
  const item = useRef([]);
  const flatListRef = useRef(null);

  // States
  const [loading, setLoading] = useState(true);

  // Hooks
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const onCardPress = (item: IParkingProps) => {
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

  const renderItem = useCallback(({ item }: { item: IParkingProps }) => {
    // console.log('Item:', item);
    return (
      <ParkingCard
        id={item.id}
        title={item.name}
        street={item.address}
        location={item.coordinates}
        totalParkingSpaces={item.totalParkingSpaces}
        occupiedParkingSpaces={item.occupiedParkingSpaces}
        parkingHours={item.parkingHours}
        isParkingPrivate={item.isPrivate}
        price={item.price}
        onPress={() => onCardPress(item)}
      />
    );
  }, []);

  const ListEmptyComponent = useCallback(() => {
    if (loading) {
      <ActivityIndicator
        animating={true}
        color={'white'}
        size={'large'}
      />;
    }
  }, []);

  const keyExtractor = useCallback((item: Parking) => item.id, []);

  return (
    <FlatList
      ref={flatListRef}
      data={Original_DummyData.slice(0, 3)}
      extraData={Original_DummyData.slice(0, 3)}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={ListEmptyComponent}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled
      scrollEnabled={false}
    />
  );
};



export default ParkingList;
