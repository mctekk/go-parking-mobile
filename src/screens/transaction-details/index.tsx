/* eslint-disable react-native/no-inline-styles */
// Modules
import React from 'react';
import { SafeAreaView } from 'react-native';

// Styles
import {
  ScreenHeader,
  Content,
  TopContainer,
  MapContainer,
  TopSectionContainer,
  DetailsContainer,
  DetailRowContainer,
  BottomButton,
} from './styles';
import { Typography } from 'styles';
import { DEFAULT_THEME } from 'styles/theme';

// Organisms
import ViewContainer from 'components/organisms/view-container';

// Molecules
import PaymentMethod from 'components/molecules/payment-method';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';
import CustomText from 'atoms/text';
import DashLine from 'components/atoms/dash-line';

// Utils
import { ShareUtil } from 'utils';

interface ITransactionDetailsScreenProps {
  navigation: any;
  route: any;
}

export const TransactionDetails = (props: ITransactionDetailsScreenProps) => {
  // Props
  const { navigation, route } = props;

  // Params
  const order = route?.params?.transactionData;

  const rowsData = [
    {
      id: 1,
      titleLocale: 'bookingDate',
      subtitle: '28 July 2024',
      bottomDashLine: false,
    },
    {
      id: 2,
      titleLocale: 'parkingNo',
      subtitle: '#309',
      bottomDashLine: true,
    },
    {
      id: 3,
      titleLocale: 'arriveAfter',
      subtitle: '10:00 AM',
      bottomDashLine: false,
    },
    {
      id: 4,
      titleLocale: 'exitBefore',
      subtitle: '11:00 AM',
      bottomDashLine: false,
    },
    {
      id: 5,
      titleLocale: 'duration',
      subtitle: order?.duration_time,
      bottomDashLine: true,
    },
    {
      id: 6,
      titleLocale: 'subtotal',
      subtitle: `$${order?.price?.amount}`,
      bottomDashLine: true,
    },
  ];

  return (
    <ViewContainer>
      <SafeAreaView />
      <Content>
        <ScreenHeader
          title={translate('transactionDetails', TextTransform.CAPITALIZE)}
          style={{ paddingHorizontal: 0 }}
          titleProps={{ weight: '700' }}
          backIconColor={DEFAULT_THEME.primary}
        />
        <TopContainer>
          <MapContainer />
          <TopSectionContainer>
            <CustomText
              size={Typography.FONT_SIZE_14}
              weight="700"
              style={{ marginBottom: 8 }}
              color={DEFAULT_THEME.white}>
              {order?.name}
            </CustomText>
            <CustomText
              size={Typography.FONT_SIZE_10}
              weight="500"
              lineHeight={Typography.FONT_SIZE_14}
              color={DEFAULT_THEME.white}>
              {order?.street}
            </CustomText>
          </TopSectionContainer>
        </TopContainer>
        <DashLine color={DEFAULT_THEME.cardGray} />
        <DetailsContainer>
          {rowsData?.map((rowData: any) => {
            return (
              <>
                <DetailRowContainer>
                  <CustomText
                    size={Typography.FONT_SIZE_10}
                    weight="500"
                    color={DEFAULT_THEME.dashGray}>
                    {translate(rowData?.titleLocale, TextTransform.CAPITALIZE)}
                  </CustomText>
                  <CustomText
                    size={Typography.FONT_SIZE_12}
                    weight="600"
                    color={DEFAULT_THEME.titleGray}>
                    {rowData?.subtitle}
                  </CustomText>
                </DetailRowContainer>
                {rowData?.bottomDashLine && (
                  <DashLine color={DEFAULT_THEME.cardGray} />
                )}
              </>
            );
          })}
        </DetailsContainer>
        <PaymentMethod style={{ marginTop: 10 }} />
        <DetailRowContainer style={{ marginVertical: 16 }}>
          <CustomText
            size={Typography.FONT_SIZE_14}
            weight="500"
            color={DEFAULT_THEME.dashGray}>
            {translate('total', TextTransform.CAPITALIZE)}
          </CustomText>
          <CustomText
            size={Typography.FONT_SIZE_16}
            weight="600"
            color={DEFAULT_THEME.titleGray}>
            {`$${order?.price?.amount}`}
          </CustomText>
        </DetailRowContainer>
        <BottomButton onPress={() => ShareUtil('', 'https://www.google.com')}>
          <CustomText
            size={Typography.FONT_SIZE_16}
            weight="600"
            color={DEFAULT_THEME.black}>
            {translate('share', TextTransform.CAPITALIZE)}
          </CustomText>
        </BottomButton>
      </Content>
    </ViewContainer>
  );
};
