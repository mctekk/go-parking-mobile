// Modules
import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// Styles
import { Container, Content } from './styled';
import SearchBar from 'components/molecules/search-bar';
import MapsSearch from 'components/molecules/maps-search';

interface IMapsViewProps {

}

const MapsView = (props: IMapsViewProps) => {

  const {
    navigation
  } = props;

  // States
  const [keyword, setKeyword] = useState('');

  const handleSearch = useCallback((text: string) => {
    setKeyword(text);
  }, []);

  const handleClearText = useCallback(() => {
    setKeyword('');
  }, []);

  const onSubmitEditing = useCallback(() => {
    console.log('Search:', keyword);
  }, [keyword]);

  return (
    <Container>
      <MapView
        style={styles.map}
        scrollEnabled={false}
        zoomEnabled={false}
        zoomTapEnabled={false}
        region={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
      <Content>

        <MapsSearch />

      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  map: {
    zIndex: -1,
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapsView;
