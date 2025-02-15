/* eslint-disable react-native/no-inline-styles */
// Models
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// Atoms
import Text from 'components/atoms/text';
import { TextTransform, translate } from 'components/atoms/localized-label';
import Button from 'components/atoms/button';

// Styles
import { DEFAULT_THEME } from 'styles/theme';
import { Typography } from 'styles';

// Icons
import DollarIcon from 'assets/icons/dollar-icon';
import ClockIcon from 'assets/icons/clock-icon';
import CarIcon from 'assets/icons/car-icon';
import BookmarkIcon from 'assets/icons/bookmark-icon';

// Interfaces
import { IParkingLocation, IParkingPrice } from 'core/interface/parking.interface';

interface IParkingCardProps {
  id: number;
  title: string;
  street: string;
  location: IParkingLocation;
  totalParkingSpaces: number;
  occupiedParkingSpaces: number;
  duration_time: number;
  parkingHours: string;
  isParkingPrivate: boolean;
  price: IParkingPrice;
  isFromMaps?: boolean;
  onBookNowPress: () => void;
}

interface ITagsProps {
  name: string;
}

const Container = styled.View`
  flex: 1;  
  margin-right: 10px;
  border-radius: 15px;
  background-color: rgba(45, 45, 45, 1);
  padding: 20px;
  margin-bottom: 10px;
  width: 350px;
`;

const TagListContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

const TagContainer = styled.View`
  background-color: rgba(66, 66, 66, 1);
  border-radius: 5px;
  padding: 5px 10px;
  margin-horizontal: 2px;
`;

const TagText = styled(Text)`
  font-size: ${Typography.FONT_SIZE_10}px;
  line-height: ${Typography.FONT_SIZE_12}px;
  color: white;
  font-weight: 700;
`;

const BookmarksContainer = styled.TouchableOpacity`
  background-color: rgba(66, 66, 66, 1);
  height: 40px;
  width: 40px;
  border-radius: 20px;
  position: absolute;
  top: 15px;
  right: 15px;
  justify-content: center;
  align-items: center;
`;

const TopContainer = styled.View`
  flex-direction: row;
`;

const Wrapper = styled.View`
  margin-left: 10px;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const Title = styled(Text)`
  font-size: ${Typography.FONT_SIZE_16}px;
  line-height: ${Typography.FONT_SIZE_18}px;
  font-weight: 700;
  color: white;
  margin-bottom: 15px;
  width: 220px;
`;

const Street = styled(Text)`
  font-size: ${Typography.FONT_SIZE_12}px;
  line-height: ${Typography.FONT_SIZE_20}px;
  color: white;
  width: 220px;
`;

const MapContainer = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 10px;
`;

const BottomContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const BottomContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BottomText = styled(Text)`
  font-size: ${Typography.FONT_SIZE_14}px;
  line-height: ${Typography.FONT_SIZE_16}px;
  font-weight: 700;
  color: white;
  margin-left: 5px;
`;

const BottomSubtitle = styled(Text)`
  font-size: ${Typography.FONT_SIZE_14}px;
  line-height: ${Typography.FONT_SIZE_16}px;
  color: white;
  margin-left: 5px;
`;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${DEFAULT_THEME.primary};
`;

const BookNowButton = styled(Button)`
  border-radius: 25px;
  margin-top: 15px;
`;

const Tags = (props: ITagsProps) => {
  const { name, isFromMaps } = props;
  return (
    <TagContainer
      isFromMaps={isFromMaps}
    >
      <TagText>{name}</TagText>
    </TagContainer>
  );
};

const MapsParkingCards = (props: IParkingCardProps) => {

  // Props
  const {
    id,
    title,
    street,
    location,
    totalParkingSpaces,
    occupiedParkingSpaces,
    duration_time,
    parkingHours,
    isParkingPrivate,
    price,
    isFromMaps,
    onBookNowPress,
  } = props;

  const { latitude, longitude } = location;
  const parksLeft = totalParkingSpaces - occupiedParkingSpaces;

  // States
  const [locations, setLocations] = useState({ latitude: latitude, longitude: longitude });

  useEffect(() => {
    setLocations({ latitude: latitude, longitude: longitude });
  }, [location]);


  return (
    <Container
      isFromMaps={isFromMaps}
    >
      <BookmarksContainer>
        <BookmarkIcon />
      </BookmarksContainer>

      <TopContainer>
        <MapContainer>
          <MapView
            style={styles.map}
            scrollEnabled={false}
            zoomEnabled={false}
            zoomTapEnabled={false}
            cacheEnabled={true}
            region={{
              latitude: locations?.latitude,
              longitude: locations?.longitude,
              latitudeDelta: 0.0043,
              longitudeDelta: 0.0034,
            }}
          />
        </MapContainer>
        <Wrapper>
          <Title
            numberOfLines={2}
            ellipsizeMode='tail'
          >
            {title}
          </Title>
          <Street
            numberOfLines={2}
            ellipsizeMode='tail'
          >
            {street}
          </Street>
        </Wrapper>
      </TopContainer>

      <BottomContainer>
        <BottomContent>
          <IconContainer>
            <DollarIcon />
          </IconContainer>
          <BottomText>{price.amount}</BottomText>
          <BottomSubtitle>/hr</BottomSubtitle>
        </BottomContent>

        <BottomContent>
          <IconContainer>
            <ClockIcon />
          </IconContainer>
          <BottomText>{duration_time}</BottomText>
          <BottomSubtitle>min</BottomSubtitle>
        </BottomContent>

        <BottomContent>
          <IconContainer>
            <CarIcon width={13} height={10} fill={'#000'} />
          </IconContainer>
          <BottomText>{parksLeft}</BottomText>
          <BottomSubtitle>{translate('available', TextTransform.NONE)}</BottomSubtitle>
        </BottomContent>
      </BottomContainer>

      <BookNowButton
        title='Book Now'
        onPress={onBookNowPress}
        textStyle={{
          fontSize: Typography.FONT_SIZE_16,
          lineHeight: Typography.FONT_SIZE_18,
          fontWeight: '700',
          color: DEFAULT_THEME.black,
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  map: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
});

export default MapsParkingCards;
