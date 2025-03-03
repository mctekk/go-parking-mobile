// Modules
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Atoms
import BackArrowV2 from 'assets/icons/back-arrow-v2';

// Constants
import { TOUCHABLE_AREA } from 'utils/constants';

interface IBackButtonProps extends TouchableOpacityProps {
  backIconColor?: string;
}

const BackButtonContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

const BackButton = (props: IBackButtonProps) => {
  const { onPress, backIconColor } = props;
  return (
    <BackButtonContainer
      onPress={onPress}
      hitSlop={TOUCHABLE_AREA}
      {...props}
    >
      <BackArrowV2 fill={backIconColor} />
    </BackButtonContainer>
  );
};

export default BackButton;
