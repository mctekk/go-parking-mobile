/* eslint-disable react-native/no-inline-styles */
// Modules
import React, { useCallback, useState } from 'react';
import styled from 'styled-components/native';

// Atoms
import Text from 'components/atoms/text';

// Molecules
import SearchBar from 'components/molecules/search-bar';
import { Typography } from 'styles';
import { vehicleTypes } from 'utils/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import { DEFAULT_THEME } from 'styles/theme';
import { TextTransform, translate } from 'components/atoms/localized-label';


interface IMapsSearchProps {

}

interface ITagsProps {
  id: number;
  name: string;
  icon: any;
  onTagPress: (id: string) => void;
  isTagSelected: boolean;
}

const Container = styled.View`
  flex: 1;
`;

const Title = styled(Text)`

`;

const TagListContainer = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const TagContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.isTagSelected ? DEFAULT_THEME.primary : DEFAULT_THEME.white};
  border-radius: 10px;
  padding-vertical: 5px;
  padding-horizontal: 10px;
  margin-horizontal: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TagText = styled(Text)`
  font-size: ${Typography.FONT_SIZE_10}px;
  line-height: ${Typography.FONT_SIZE_12}px;
  color: ${(props) => props.isTagSelected ? DEFAULT_THEME.background : 'rgba(60, 60, 67, 0.6)'};
  font-weight: 700;
`;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 20px;
`;

const Tags = (props: ITagsProps) => {
  const {
    id,
    name,
    icon,
    onTagPress,
    isTagSelected,
  } = props;

  const Icon = icon;
  const IconColor = isTagSelected ? DEFAULT_THEME.black : DEFAULT_THEME.background;

  return (
    <TagContainer
      onPress={() => onTagPress(id)}
      isTagSelected={isTagSelected}
    >
      <IconContainer>
        <Icon width={12} height={12} fill={IconColor} />
      </IconContainer>
      <TagText isTagSelected={isTagSelected}>{name}</TagText>
    </TagContainer>
  );
};

const MapsSearch = (props: IMapsSearchProps) => {

  // States
  const [keyword, setKeyword] = useState('');
  const [selectedTag, setSelectedTag] = useState(1);

  const handleSearch = useCallback((text: string) => {
    setKeyword(text);
  }, []);

  const handleClearText = useCallback(() => {
    setKeyword('');
  }, []);

  const onSubmitEditing = useCallback(() => {
    console.log('Search:', keyword);
  }, [keyword]);

  const onTagPress = (id: string) => {
    setSelectedTag(id);
  };

  const renderItem = useCallback(({ item }) => {
    const isTagSelected = selectedTag === item.id;
    return (
      <Tags
        id={item.id}
        name={item.name}
        icon={item.icon}
        onTagPress={onTagPress}
        isTagSelected={isTagSelected}
      />
    );
  }, [selectedTag]);

  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <Container>

      <SearchBar
        value={keyword}
        defaultValue={keyword}
        returnKeyType="search"
        placeholder={translate('whereAreYouGoing', TextTransform.NONE)}
        onChangeText={handleSearch}
        handleClearText={handleClearText}
        onSubmitEditing={onSubmitEditing}
        hasBackButton
        searchContainerStyle={{
          paddingHorizontal: 15,
        }}
      />

      <TagListContainer>
        <FlatList
          data={vehicleTypes}
          extraData={vehicleTypes}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            width: '100%',
            paddingLeft: 15,
           }}
        />
      </TagListContainer>

    </Container>
  );
};

export default MapsSearch;
