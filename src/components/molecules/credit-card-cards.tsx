import PencilIcon from 'assets/icons/pencil-icon';
import TrashIcon from 'assets/icons/trash-icon';
import Text from 'components/atoms/text';
import React from 'react';
import styled from 'styled-components/native';
import { Typography } from 'styles';
import { getCardTypeImage } from 'utils';

const Container = styled.View`
  background-color: rgba(68, 68, 68, 1);
  border-radius: 5px;
  margin-bottom: 20px;
  flex-direction: row;
  padding-horizontal: 15px;
  padding-vertical: 10px;
  align-items: center;
  justify-content: space-between;
`;

const CardIconContainer = styled.View`

`;

const Wrapper = styled.View`
  flex-direction: row;    
  align-items: center;
`;

const CardIcon = styled.Image`
  width: 35px;
  height: 35px;
`;

const CardTitle = styled(Text)`
  font-size: ${Typography.FONT_SIZE_16}px;
  line-height: ${Typography.FONT_SIZE_20}px;
  font-weight: 400;
  color: rgba(238, 238, 238, 1);
  margin-left: 14px;
`;

const OptionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 30px;
`;

interface CreditCardCardsProps {
  title?: string;
  children?: React.ReactNode;
}

export const CreditCardCards = (props: CreditCardCardsProps) => {

  const {
    cardType,
    cardTypeKey,
    cardNumber,
    cardHolder,
    expiryDate,
  } = props;

  return (
    <Container>
      <Wrapper>
        <CardIconContainer>
          <CardIcon
            source={getCardTypeImage(cardTypeKey)}
            resizeMode='contain'
          />
        </CardIconContainer>
        <CardTitle>{cardNumber}</CardTitle>
      </Wrapper>

      <OptionsContainer>
        <IconContainer>
          <PencilIcon />
        </IconContainer>

        <IconContainer>
          <TrashIcon />
        </IconContainer>
      </OptionsContainer>
    </Container>
  );
};