/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
// Modules
import React, { useContext, useEffect, useRef } from 'react';

// Context
import { UserContext } from 'components/context/user-context';

// Atoms
import { TextTransform, translate } from 'components/atoms/localized-label';

// Styles
import {
  ScrollContainer,
  Content,
  ScreenHeader,
  Title,
} from './styles';

// Organisms
import ViewContainer from 'components/organisms/view-container';

// Molecules
import SearchCard from 'components/molecules/search-card';

// Interfaces
interface IHomeProps {
  navigation: any;
}

export const Home = (props: IHomeProps) => {
  // Props
  const { navigation } = props;

  // Context
  const { userData } = useContext(UserContext);

  // References
  const scrollList = useRef(null);

  useEffect(() => {
    // TESTING PURPOSES
    console.log('User Data:', userData);
  }, []);

  const onSearch = (text: string) => {
    console.log('Search:', text);
  };

  return (
    <ViewContainer
      headerViewStyles={{ height: '35%' }}
    >

      <ScreenHeader
        title={translate('home', TextTransform.CAPITALIZE)}
        subtitle={'Your Transactions at a Glance'}
      />

      <ScrollContainer
        ref={scrollList}
        showsVerticalScrollIndicator={false}
      >
        <Content>
          <SearchCard
            navigation={navigation}
            onSearch={onSearch}
          />


          <Title>{translate('parkEasySafety', TextTransform.NONE)}</Title>
    

        </Content>
      </ScrollContainer>

    </ViewContainer>
  );
};
