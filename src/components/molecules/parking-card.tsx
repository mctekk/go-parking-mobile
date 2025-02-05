// Models
import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// Atoms
import Text from 'components/atoms/text';
import { TextTransform, translate } from 'components/atoms/localized-label';

// Styles
import { DEFAULT_THEME } from 'styles/theme';
import { Typography } from 'styles';

// Icons
import DollarIcon from 'assets/icons/dollar-icon';
import ClockIcon from 'assets/icons/clock-icon';
import CarIcon from 'assets/icons/car-icon';

interface IParkingCardProps {
  id: number;
  title: string;
  street: string;
  location: string;
  parkingLeft: number;
  price: number;
  tags: string[];
}

interface ITagsProps {
  name: string;
}

const Container = styled.TouchableOpacity`
  background-color: rgba(66, 66, 66, 1);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
`;

const TopContainer = styled.View`
  flex-direction: row;
`;

const Wrapper = styled.View`
  flex: 1;
  margin-left: 15px;
`;

const Title = styled(Text)`
  font-size: ${Typography.FONT_SIZE_16}px;
  line-height: ${Typography.FONT_SIZE_18}px;
  font-weight: 700;
  color: white;
  margin-bottom: 5px;
`;

const Street = styled(Text)`
  font-size: ${Typography.FONT_SIZE_12}px;
  line-height: ${Typography.FONT_SIZE_20}px;
  color: white;
`;

const MapContainer = styled.View`
  height: 80px;
  width: 80px;
  border-radius: 10px;
`;

const TagListContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

const TagContainer = styled.View`
  background-color: rgba(45, 45, 45, 1);
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

const Tags = (props: ITagsProps) => {
  const { name } = props;
  return (
    <TagContainer>
      <TagText>{name}</TagText>
    </TagContainer>
  );
};

const ParkingCard = (props: IParkingCardProps) => {

  // Props
  const {
    id,
    title,
    street,
    location,
    parkingLeft,
    duration_time,
    price,
    tags,
  } = props;

  const { latitude, longitude } = location;

  return (
    <Container>
      <TopContainer>
        <MapContainer>
          <MapView
            style={styles.map}
            scrollEnabled={false}
            zoomEnabled={false}
            zoomTapEnabled={false}
            region={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        </MapContainer>

        <Wrapper>
          <TagListContainer>
            {tags.map((tag, index) => (
              <Tags
                key={index}
                name={tag?.name}
              />
            ))}
          </TagListContainer>
          <Title>{title}</Title>
          <Street>{street}</Street>
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
          <BottomText>{parkingLeft}</BottomText>
          <BottomSubtitle>{translate('available', TextTransform.NONE)}</BottomSubtitle>
        </BottomContent>

      </BottomContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  map: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});

export default ParkingCard;
