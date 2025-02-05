/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
// Modules
import React, { useCallback, useEffect, useRef, useState, memo } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { debounce } from 'lodash';
import { useScrollToTop } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Molecules
// import ErrorListComponent from 'components/molecules/error-list-component';
import HistoryCard from 'components/molecules/history-card';

// Styles
import { DEFAULT_THEME } from 'styles/theme';

// Services
import kanvasService from 'core/services/kanvas-service';

// Utils
import { wait } from 'utils';

// Assets
import { EventRegister } from 'react-native-event-listeners';

// Interface
import { RefreshControl } from 'react-native-gesture-handler';

const Container = styled.View`
  flex: 1;
  margin-top: 25px;
  border-radius: 10px;
`;

const ErrorContainer = styled.View``;

const EmptyFooter = styled.View`
  width: 100%;
  height: 40px;
`;

export enum LOCAL_LIST_EVENTS {
  ON_LOCAL_LIST_UPDATE = 'ON_LOCAL_LIST_UPDATE',
}

// Interfaces
interface IFeedProps {
  isLoading?: boolean;
  isSearching?: boolean;
  searchText?: string;
  safeCache?: string;
}

const HistoryList = (props: IFeedProps) => {
  // Props
  const { isLoading = true, isSearching, searchText = '', safeCache } = props;

  // Refs
  const items = useRef([]);
  const searchedItems = useRef([]);
  const flatListRef = useRef(null);
  const pages_total = useRef<number>(0);
  const last_page = useRef<number>(0);

  // Hooks
  const navigation = useNavigation();
  useScrollToTop(flatListRef);

  // State
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(isLoading);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasError, setError] = useState(false);

  // Const
  const { ON_LOCAL_LIST_UPDATE } = LOCAL_LIST_EVENTS;

  const saveCache = async (data: any) => {
    if (!safeCache) {
      return;
    }
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(safeCache, jsonValue);
    } catch (error) {
      throw new Error(`Error saving feed on cache: ${error}`);
    }
  };

  const getCachedData = async () => {
    if (!safeCache) {
      return;
    }
    const cacheData = await AsyncStorage.getItem(safeCache);
    const parsedData = JSON.parse(cacheData);
    if (parsedData) {
      items.current = parsedData;
      setLoading(false);
      await wait(1000).then(() => {
        onRefresh();
      });
      return;
    }
    onRefresh();
  };

  // Get the list of transactions
  const getTransactions = debounce(async (pageNumber = 1) => {
    try {
      // const response = await kanvasService.getOrders(
      //   pageNumber,
      // );
      // const { paginatorInfo, data } = response?.orders;
      const data: any = parking_dummy_list;
      if (pageNumber > 1) {
        items.current.push(...data);
      } else {
        setLoading(true);
        items.current = data;
        setLoading(false);
      }
      // if (safeCache && pageNumber === 1) {
      //   saveCache(data);
      // }
      // paginatorInfo && (pages_total.current = paginatorInfo.lastPage);
      // paginatorInfo && (last_page.current = paginatorInfo.currentPage);
      setRefreshing(false);
      setLoading(false);
      setLoadingMore(false);
      setError(false);
    } catch (error) {
      console.log('getTransactions error:', error);
      setError(true);
      setLoading(false);
    }
  }, 500);

  // Get the list of transactions by search text
  const searchProducts = async () => {
    try {
      // const response = await kanvasService.searchOrders(
      //   searchText.trim(),
      // );
      // const { data } = response?.orders;
      // searchedItems.current = data;
      // setRefreshing(false);
      // setLoading(false);
      // setError(false);
    } catch (error) {
      console.log('searchProducts error:', error);
      setLoading(false);
    }
  };

  useEffect(
    () => () => {
      setPage(1);
      items.current = [];
      pages_total.current = 0;
      last_page.current = 0;
      setLoading(true);
      setLoadingMore(false);
    },
    [],
  );

  useEffect(() => {
    if (safeCache) {
      getCachedData();
      return;
    }

    getTransactions();
  }, []);

  useEffect(() => {
    !loading && setLoading(true);
    const delayDebounceFn = setTimeout(() => {
      searchProducts();
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

  useEffect(() => {
    const updateList = EventRegister.on(ON_LOCAL_LIST_UPDATE, () => {
      setLoading(true);
      pages_total.current = 1;
      setPage(1);
      getTransactions(1);
    });

    return () => {
      EventRegister.rm(updateList);
    };
  }, []);

  const loadMoreData = async () => {
    setLoadingMore(true);
    const page_variant = page;
    const newPageNumber = page_variant + 1;

    // handle for when the list is not flatlist and the loading actions are comming from another component
    if (newPageNumber > pages_total.current) {
      setLoadingMore(false);
      return;
    }

    if (
      newPageNumber > last_page.current &&
      newPageNumber <= pages_total.current
    ) {
      getTransactions(newPageNumber);
      pages_total.current = newPageNumber;
      setPage(newPageNumber);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await wait(1000);
    setPage(1);
    getTransactions(1);
  };

  const onCardPress = (item: object) => {
    navigation.navigate('TransactionDetails', { transactionData: item });
  };

  const renderItem = useCallback(
    ({ item, index }) => {
      return (
        <HistoryCard
          key={item.id}
          order={item}
          onPress={() => onCardPress(item)}
        />
      );
    },
    [isSearching],
  );

  const ListFooterComponent = () => {
    return loadingMore ? (
      <ActivityIndicator
        color={DEFAULT_THEME.primary}
        style={{ marginTop: 20 }}
      />
    ) : (
      <EmptyFooter />
    );
  };

  const keyExtractor = useCallback(item => item.id.toString(), []);

  return (
    <Container>
      {hasError ? (
        <ErrorContainer>
          {/* <ErrorListComponent
            onRefresh={() => {
              setLoading(true);
              onRefresh();
            }}
            loading={loading}
          /> */}
        </ErrorContainer>
      ) : (
        <></>
      )}

      {loading && !hasError && (
        <ActivityIndicator size="small" color={DEFAULT_THEME.primary} />
      )}

      {!loading && !hasError && !isSearching && (
        <FlatList
          data={items.current}
          extraData={items.current}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ref={flatListRef}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMoreData}
          scrollEventThrottle={16}
          onEndReachedThreshold={2}
          refreshControl={
            <RefreshControl
              onRefresh={onRefresh}
              refreshing={refreshing}
              tintColor={DEFAULT_THEME.white}
            />
          }
          // ListEmptyComponent={ListEmptyComponent}
          contentContainerStyle={styles?.listContainerStyle}
          ListFooterComponent={ListFooterComponent}
        />
      )}

      {!loading && !hasError && isSearching && (
        <FlatList
          data={searchedItems.current}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          //ListEmptyComponent={<SearchEmptyComponent />}
          contentContainerStyle={styles?.listContainerStyle}
        />
      )}
    </Container>
  );
};

const styles = {
  listContainerStyle: {
    borderRadius: 10,
    paddingHorizontal: 22,
    paddingBottom: 50,
  },
};

const parking_dummy_list = [
  {
    id: 1,
    name: 'Parking La Puntilla',
    street: 'C. Arturo Schomburg, San Juan, 00901',
    price: {
      amount: 10,
      currency: 'USD',
    },
    duration_time: '2 hours',
    parkingsLeft: 10,
    tags: [
      {
        id: 1,
        name: 'Covered',
      },
      {
        id: 2,
        name: 'Security',
      },
    ],
    locations: {
      latitude: '37.7749',
      longitude: '-122.4194',
    },
  },
  {
    id: 2,
    name: 'Parking Covadonga',
    street: 'C. Juan Antonio Corretjer 00901',
    price: {
      amount: 10,
      currency: 'USD',
    },
    duration_time: '2 hours',
    parkingsLeft: 10,
    tags: [
      {
        id: 1,
        name: 'Covered',
      },
      {
        id: 2,
        name: 'Security',
      },
    ],
    locations: {
      latitude: '37.7749',
      longitude: '-122.4194',
    },
  },
];

export default memo(HistoryList);
