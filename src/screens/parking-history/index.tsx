/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
// Modules
import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Styles
import { ScreenHeader, Content } from './styles';

// Organisms
import ViewContainer from 'components/organisms/view-container';
import HistoryList from 'components/organisms/history-list';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';
import SearchCard from 'components/molecules/search-card';

// Molecules
import SearchBar from 'molecules/search-bar';
import { DEFAULT_THEME } from 'styles/theme';

interface IParkingHistoryScreenProps {}

const ParkingHistory = (props: IParkingHistoryScreenProps) => {
  // Props
  const { navigation } = props;

  // States
  const [keyword, setKeyword] = useState('');

  const HeaderComponent = () => {
    return (
      <ScreenHeader
        title={translate('history', TextTransform.CAPITALIZE)}
        subtitle={translate('historyMsg', TextTransform.NONE)}
      />
    );
  };

  const handleSearch = useCallback((text: string) => {
    setKeyword(text);
    //onSearch?.(text);
  }, []);

  const handleClearText = useCallback(() => {
    setKeyword('');
  }, []);

  const onSubmitEditing = useCallback(() => {
    console.log('Search:', keyword);
  }, [keyword]);

  return (
    <ViewContainer headerChildren={<HeaderComponent />}>
      <Content>
        <SearchBar
          value={keyword}
          defaultValue={keyword}
          returnKeyType="search"
          onChangeText={handleSearch}
          handleClearText={handleClearText}
          onSubmitEditing={onSubmitEditing}
          searchInputStyle={{
            backgroundColor: DEFAULT_THEME.white,
          }}
          searchContainerStyle={{
            paddingHorizontal: 22,
            marginTop: 22,
          }}
        />
        <HistoryList />
      </Content>
    </ViewContainer>
  );
};

export default ParkingHistory;
