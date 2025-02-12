/* eslint-disable react-native/no-inline-styles */

// Modules
import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

// Atoms
import CustomText from 'atoms/text';
import { TextTransform, translate } from 'components/atoms/localized-label';

// Styles
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';

interface ITimeSelectorProps {
  onTimeSelected: (time: any) => void;
  selectedId?: number;
}

const Container = styled.View`
  width: 100%;
  margin-top: 38px;
`;

const Content = styled.ScrollView`
  flex-direction: row;
  padding-horizontal: 20px;
`;

const ScrollerSpacer = styled.ScrollView`
  width: 30px;
`;

const SelectionButton = styled.TouchableOpacity`
  padding-horizontal: 12px;
  background-color: ${DEFAULT_THEME.cardGray};
  margin-right: 10px;
  padding-vertical: 10px;
  border-radius: 12px;
`;

const dummyTimeList = [
  {
    id: 1,
    label: '1 hour',
  },
  {
    id: 2,
    label: '1.5 hour',
  },
  {
    id: 3,
    label: '2 hour',
  },
  {
    id: 4,
    label: '2.5 hour',
  },
  {
    id: 5,
    label: '3 hour',
  },
  {
    id: 6,
    label: '4 hour',
  },
  {
    id: 7,
    label: '5 hour',
  },
  {
    id: 8,
    label: '6 hour',
  },
];

const TimeSelector = (props: ITimeSelectorProps) => {
  const { onTimeSelected, selectedId } = props;

  return (
    <Container>
      <CustomText
        size={Typography.FONT_SIZE_16}
        lineHeight={Typography.LINE_HEIGHT_20}
        weight="600"
        style={styles.title}
        color={DEFAULT_THEME.white}>
        {translate('howLong', TextTransform.CAPITAL)}
      </CustomText>
      <Content horizontal showsHorizontalScrollIndicator={false}>
        {dummyTimeList.map((time: any) => {
          return (
            <SelectionButton
              onPress={() => onTimeSelected(time)}
              style={{
                backgroundColor:
                  time.id === selectedId
                    ? DEFAULT_THEME.primary
                    : DEFAULT_THEME.cardGray,
              }}>
              <CustomText
                size={Typography.FONT_SIZE_12}
                weight="500"
                color={
                  time.id === selectedId
                    ? DEFAULT_THEME.black
                    : DEFAULT_THEME.dashGray
                }>
                {time.label}
              </CustomText>
            </SelectionButton>
          );
        })}
        <ScrollerSpacer />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 20,
    marginBottom: 12,
  },
});

export default TimeSelector;
