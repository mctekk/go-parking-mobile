import ParkingCard from 'components/molecules/parking-card';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const renderItem = useCallback(({ item }: { item: Parking }) => {
    console.log('Item:', item);
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
