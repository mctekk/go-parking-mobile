import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import styled from 'styled-components/native';
import { SingleTab } from 'atoms/session-tab';
import { ITabRoutes } from 'screens/parking';
import { Typography } from 'styles';

const TabsListContainer = styled(FlatList)`
  flex-direction: row;
`;

interface IProps {
  routes: Array;
  selectedCategoryId: Number;
  onCategoryPress: Function;
}

const TabsList = (props: IProps) => {
  const { routes, selectedCategoryId, onCategoryPress } = props;

  const renderItem = (e: ListRenderItemInfo<ITabRoutes>) => {
    const { item } = e;
    const active = Number(item.id) === selectedCategoryId;
    return (
      <SingleTab
        onPress={() => onCategoryPress && onCategoryPress(item)}
        label={item.name}
        active={active}
        textSize={Typography.FONT_SIZE_16}
      />
    );
  };
  return (
    <TabsListContainer
      data={routes}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      horizontal
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ justifyContent: 'space-between', width: '100%' }}
    />
  );
};

export default TabsList;
