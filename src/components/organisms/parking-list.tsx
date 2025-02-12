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
import { parking_dummy_list } from 'utils/dummy-data';

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
      location: item.locations,
      parkingName: item.name,
      parkingAvailable: item.parkingsLeft,
      streetLocation: item.street,
      price: item.price,
      durationTime: item.duration_time,
    });
  };

  const renderItem = useCallback(({ item }: { item: IParkingProps }) => {
    return (
      <ParkingCard
        id={item.id}
        title={item.name}
        street={item.street}
        location={item.locations}
        parkingLeft={item.parkingsLeft}
        duration_time={item.duration_time}
        price={item.price}
        tags={item.tags}
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
      data={parking_dummy_list}
      extraData={parking_dummy_list}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={ListEmptyComponent}
      showsVerticalScrollIndicator={false}
    />
  );
};



export default ParkingList;
