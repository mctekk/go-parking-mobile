/* eslint-disable react-native/no-inline-styles */

// Modules
import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// Atoms
import CustomText from 'atoms/text';
import DashLine from 'components/atoms/dash-line';

// Styles
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';
import { CarIcon, ClockIcon } from 'assets/icons';
import { scaleSize } from 'styles/mixins';

interface IHistoryCardProps {
  onPress?: () => void;
  order: any;
}

const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${DEFAULT_THEME.cardGray};
  padding: ${scaleSize(15)}px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const TopContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;
`;

const BottomContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 10px;
`;

const MapContainer = styled.View`
  width: 53px;
  height: 53px;
  border-radius: 5px;
`;

const IconRow = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`;

const IconContainer = styled.View`
  width: 16px;
  height: 16px;
  background-color: ${DEFAULT_THEME.primary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

const BottomSectionContainer = styled.View`
  flex: 1;
  margin-left: 15px;
`;

const HistoryCard = (props: IHistoryCardProps) => {
  const { onPress, order } = props;

  const onCardPress = () => {
    onPress?.();
  };

  return (
    <Container
      onPress={onCardPress}
    >
      <TopContainer>
        <CustomText
          size={Typography.FONT_SIZE_15}
          weight="600"
          color={DEFAULT_THEME.titleGray}>
          GP - 2302884399
        </CustomText>
        <CustomText
          size={Typography.FONT_SIZE_15}
          weight="600"
          color={DEFAULT_THEME.titleGray}>
          28 July 2024
        </CustomText>
      </TopContainer>

      <DashLine color={DEFAULT_THEME.dashGray} />

      <BottomContainer>
        <MapContainer>
          <MapView
            style={styles.map}
            scrollEnabled={false}
            zoomEnabled={false}
            zoomTapEnabled={false}
            cacheEnabled={true}
            region={{
              latitude: parseFloat(order?.locations?.latitude),
              longitude: parseFloat(order?.locations?.longitude),
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        </MapContainer>

        <BottomSectionContainer>
          <CustomText
            size={Typography.FONT_SIZE_14}
            lineHeight={Typography.FONT_SIZE_18}
            weight="700"
            style={{ marginBottom: 8 }}
            color={DEFAULT_THEME.white}
            numberOfLines={2}
          >
            {order?.name}
          </CustomText>
          <CustomText
            size={Typography.FONT_SIZE_12}
            lineHeight={Typography.FONT_SIZE_16}
            weight="500"
            color={DEFAULT_THEME.white}
            numberOfLines={2}
          >
            {order?.street}
          </CustomText>
        </BottomSectionContainer>

        <BottomSectionContainer>
          <IconRow>
            <IconContainer>
              <ClockIcon />
            </IconContainer>
            <CustomText
              size={Typography.FONT_SIZE_15}
              lineHeight={Typography.FONT_SIZE_20}
              weight="600"
              color={DEFAULT_THEME.white}>
              {order?.duration_time}
            </CustomText>
          </IconRow>
          <IconRow>
            <IconContainer>
              <CarIcon
                width={10}
                height={10}
                fill={DEFAULT_THEME.black}
              />
            </IconContainer>
            <CustomText
              size={Typography.FONT_SIZE_15}
              lineHeight={Typography.FONT_SIZE_20}
              weight="600"
              color={DEFAULT_THEME.white}>
              EF479379
            </CustomText>
          </IconRow>
        </BottomSectionContainer>
      </BottomContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  map: {
    width: 53,
    height: 53,
    borderRadius: 5,
  },
});

export default HistoryCard;
