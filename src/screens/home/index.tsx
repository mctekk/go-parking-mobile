/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
// Modules
import React, { useContext, useEffect, useRef } from 'react';

// Context
import { UserContext } from 'components/context/user-context';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';

// Styles
import {
  ScrollContainer,
  Content,
  ScreenHeader,
  Title,
  ListContainer,
  SubtitleContainer,
  SubtitleText,
  ViewMoreButton,
  ViewMoreText,
  FloatingButton,
  FloatingButtonText,
  IconContainer,
} from './styles';

// Organisms
import ViewContainer from 'components/organisms/view-container';

// Molecules
import SearchCard from 'components/molecules/search-card';
import ParkingList from 'components/organisms/parking-list';
import MapIcon from 'assets/icons/map-icon';

// Interfaces
interface IHomeProps {
  navigation: any;
}

export const Home = (props: IHomeProps) => {
  // Props
  const { navigation } = props;

  // Context
  const { userData } = useContext(UserContext);

  // References
  const scrollList = useRef(null);

  const onSearch = (text: string) => {
    console.log('Search:', text);
  };

  const onMapPress = () => {
    navigation.navigate('MapView');
  };

  const onSeeMorePress = () => {
    navigation.navigate('AllParkingScreen');
  }

  return (
    <ViewContainer
      headerViewStyles={{ height: '35%' }}
    >
      <ScreenHeader
        title={translate('home', TextTransform.CAPITALIZE)}
        subtitle={'Your Transactions at a Glance'}
      />

      <ScrollContainer
        ref={scrollList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <Content>
          <SearchCard
            navigation={navigation}
            onSearch={onSearch}
          />

          <ListContainer>
            <Title>{translate('nearbyPark', TextTransform.NONE)}</Title>
            <SubtitleContainer>
              <SubtitleText>{translate('theBestParkingSpaceNearYou', TextTransform.NONE)}</SubtitleText>
              <ViewMoreButton
                onPress={onSeeMorePress}
              >
                <ViewMoreText>{translate('seeMore', TextTransform.CAPITALIZE)}</ViewMoreText>
              </ViewMoreButton>
            </SubtitleContainer>

            <ParkingList
              scrollEnabled={false}
            />

          </ListContainer>
        </Content>
      </ScrollContainer>

      <FloatingButton
        onPress={onMapPress}
      >
        <FloatingButtonText>{translate('mapView', TextTransform.CAPITALIZE)}</FloatingButtonText>
        <IconContainer>
          <MapIcon />
        </IconContainer>
      </FloatingButton>

    </ViewContainer>
  );
};
