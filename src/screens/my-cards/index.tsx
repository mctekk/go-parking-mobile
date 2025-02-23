/* eslint-disable react-native/no-inline-styles */

// Modules
import React, { useCallback, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

// Styles
import { AddCardButton, ButtonText, Container, Content, IconContainer, ScreenHeader } from './styles';
import { DEFAULT_THEME } from 'styles/theme';

// Organisms
import ViewContainer from 'components/organisms/view-container';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';

// Utils
import { isAndroid } from 'utils/constants';
import { dummyCardsList } from 'utils/dummy-data';

// Molecules
import { CreditCardCards } from 'components/molecules/credit-card-cards';
import { AddCreditCardModal } from 'components/molecules/modals/add-credit-card-modal';

// Icons
import BackArrow from 'assets/icons/back-arrow';

interface IMyCardsScreenProps {
  navigation: any;
}

const MyCardsScreen = (props: IMyCardsScreenProps) => {

  // Props
  const { navigation } = props;

  // States
  const [addCardModal, setAddCardModal] = useState(false);

  const onAddCardPressed = () => {
    setAddCardModal(true);
  };

  const renderItem = useCallback(({ item }) => {
    return (
      <CreditCardCards
        cardType={item.cardType}
        cardTypeKey={item.cardTypeKey}
        cardNumber={item.cardNumber}
        cardHolder={item.cardHolder}
        expiryDate={item.expirationDate}
      />
    );
  }, []);

  const ketExtractor = useCallback((item: any, index: number) => index.toString(), []);

  return (
    <ViewContainer
      headerViewStyles={{
        paddingTop: isAndroid ? 50 : 80,
      }}
    >
      <SafeAreaView />
      <Container>
        <ScreenHeader
          title={translate('myCards', TextTransform.CAPITALIZE)}
          style={{ paddingHorizontal: 0, justifyContent: null }}
          titleProps={{ weight: '700', marginLeft: 10 }}
          backIconColor={DEFAULT_THEME.primary}
        />
        <Content>
          <FlatList
            data={dummyCardsList}
            extraData={dummyCardsList}
            renderItem={renderItem}
            keyExtractor={ketExtractor}
            contentContainerStyle={{ 
              paddingBottom: 100,
              paddingTop: 20,
             }}
          />

          <AddCardButton
            onPress={() => onAddCardPressed()}
          >
            <ButtonText>
              {translate('addNewPaymentMethod', TextTransform.CAPITALIZE)}
            </ButtonText>
            <IconContainer>
              <BackArrow height={16} width={16} />
            </IconContainer>
          </AddCardButton>
        </Content>
      </Container>

      {/* Modals */}

      <AddCreditCardModal
        visible={addCardModal}
        onClose={() => setAddCardModal(false)}
      />

    </ViewContainer>
  );
};

export default MyCardsScreen;
