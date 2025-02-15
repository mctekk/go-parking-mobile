/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-shadow */
// Modules
import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabView } from 'react-native-tab-view';
import { Dimensions } from 'react-native';

// Styles
import { Content, ScreenHeader, TabsContainer } from './styles';

// Organisms
import ViewContainer from 'components/organisms/view-container';
import TabsList from 'components/organisms/tabs-list';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';
import SessionList from 'components/organisms/session-list';

const initialLayout = { width: Dimensions.get('window').width };

interface IParkingScreenProps {
  navigation: any;
}

export interface ITabRoutes {
  id: number;
  name: string;
  key: string;
}

const routes: ITabRoutes[] = [
  {
    id: 0,
    name: translate('ongoing', TextTransform.CAPITAL),
    key: '0',
  },
  {
    id: 1,
    name: translate('pastBookings', TextTransform.CAPITAL),
    key: '1',
  },
];

const ParkingScreen = (props: IParkingScreenProps) => {
  // Props
  const { navigation } = props;

  // States
  const [index, setIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState(routes[0]);

  const setNewIndex = async (index: number): Promise<void | null> => {
    setIndex(index);
    setSelectedTab(routes[index]);
  };

  const renderTabBar = () => {
    return (
      <>
        <TabsContainer>
          <TabsList
            onCategoryPress={(item: ITabRoutes) => setNewIndex(item.id)}
            routes={routes}
            selectedCategoryId={selectedTab.id}
          />
        </TabsContainer>
      </>
    );
  };

  const renderScene = useCallback(({ route }) => {
    switch (route.id) {
      case 0:
        return <SessionList />;
      case 1:
        return <SessionList isPastList />;
      default:
        return null;
    }
  }, []);

  const HeaderComponent = () => {
    return (
      <ScreenHeader
        title={translate('parkingSesion', TextTransform.CAPITALIZE)}
        subtitle={translate('parkingSesionMsg', TextTransform.NONE)}
      />
    );
  };

  return (
    <ViewContainer
      headerChildren={HeaderComponent()}
    >
      <Content>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setNewIndex}
          initialLayout={initialLayout}
          lazy
        />
      </Content>
    </ViewContainer>
  );
};

export default ParkingScreen;
