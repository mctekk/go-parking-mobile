import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { DEFAULT_THEME } from 'styles/theme';

const DashLineContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

const DashLineBox = styled.View``;

interface IDashLineProps {
  style?: any;
  dashWidth?: number;
  dashGap?: number;
  lineHeight?: number;
  color?: string;
}

const DashLine = (props: IDashLineProps) => {

  const { style, dashWidth = 10, dashGap = 5, lineHeight = 1, color = DEFAULT_THEME.background } = props;

  // States
  const [containerLength, seContainerLength] = useState(0);

  const LineQty = Math.ceil( containerLength / (dashWidth + dashGap));

  const styles = StyleSheet.create({
    dashStyle: {
      width: dashWidth,
      marginRight: dashGap,
      height: lineHeight,
      backgroundColor: color,
    },
  });

  return (
    <DashLineContainer
      style={style}
      onLayout={event => {
          const { width } = event.nativeEvent.layout;
          seContainerLength(width);
        }}>
      {Array(LineQty).fill(null).map((_, index) =>
        <DashLineBox key={index} style={styles.dashStyle} />
      )}
    </DashLineContainer>
  );
};

export default DashLine;
