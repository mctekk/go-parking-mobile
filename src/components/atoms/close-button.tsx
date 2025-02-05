// Modules
import React from 'react';
import { BorderlessButtonProperties } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

// Atoms
import CloseIcon from 'assets/icons/close-icon';

// Constants
import { TOUCHABLE_AREA } from 'utils/constants';

interface ICloseButtonProps extends BorderlessButtonProperties {
  backIconColor?: string;
}

const CloseButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-right: 16px;
`;

const CloseButton = (props: ICloseButtonProps) => {
  const { backIconColor } = props;
  return (
    <CloseButtonContainer hitSlop={TOUCHABLE_AREA} {...props}>
      <CloseIcon fill={backIconColor} />
    </CloseButtonContainer>
  );
}

export default CloseButton;
