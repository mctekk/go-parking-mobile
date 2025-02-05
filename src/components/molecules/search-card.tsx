/* eslint-disable react-native/no-inline-styles */

// Modules
import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';
import VehicleIcon from 'components/atoms/vehicle-icon';

// Utils
import { dummyVehicleTypes } from 'utils/dummy-data';

// Molecules
import SearchBar from './search-bar';

interface ISearchCardProps {
  onSearch: (text: string) => void;
  navigation: any;
};

const CardContainer = styled.View`
  padding: 16px;
  border-radius: 20px;
  background-color: #fff;
  elevation: 5;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const FilterList = styled.FlatList``;

export const SearchCard = (props: ISearchCardProps) => {

  // Props
  const { 
    navigation,
    onSearch,
   } = props;

  // States
  const [keyword, setKeyword] = useState('');

  const handleSearch = useCallback((text: string) => {
    setKeyword(text);
    onSearch?.(text);
  }, []);

  const handleClearText = useCallback(() => {
    setKeyword('');
  }, []);

  const onSubmitEditing = useCallback(() => {
    console.log('Search:', keyword);
  }, [keyword]);

  const renderItem = useCallback(({ item }) => {
    return (
      <VehicleIcon
        key={item.id}
        name={item.name}
        icon={item.icon}
      />
    );
  }, []);

  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  return (
    <CardContainer>
      <Title>{translate('parkEasySafety', TextTransform.NONE)}</Title>

      <FilterList
        data={dummyVehicleTypes}
        extraData={dummyVehicleTypes}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={styles.listContainer}
      />

      <SearchBar
        value={keyword}
        defaultValue={keyword}
        returnKeyType="search"
        onChangeText={handleSearch}
        handleClearText={handleClearText}
        onSubmitEditing={onSubmitEditing}
        searchInputStyle={{
          backgroundColor: 'rgba(238, 238, 238, 1)',
        }}
      />

    </CardContainer>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
  }
});

export default SearchCard;
