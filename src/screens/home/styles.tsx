// Modules
import styled from 'styled-components/native';

// Styles
import { DEFAULT_THEME } from 'styles/theme';
import { Colors, Typography } from 'styles';

// Molecules
import MainHeader from 'components/molecules/main-header';
import Text from 'components/atoms/text';


export const Container = styled.View`
  flex: 1;
  background-color: ${DEFAULT_THEME.background};
`;

export const ScreenHeader = styled(MainHeader)`
  justify-content: space-between;
  align-items: center;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1px;
`;

export const Content = styled.View`
  flex: 1;
  margin-horizontal: 30px;
`;

export const ListContainer = styled.View`
  padding-top: 20px;
`;

export const Title = styled(Text)`
  font-size: ${Typography.FONT_SIZE_18}px;
  line-height: ${Typography.FONT_SIZE_20}px;
  color: ${DEFAULT_THEME.white};
  margin-bottom: 10px;
  font-weight: 700;
`;

export const SubtitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const SubtitleText = styled(Text)`
  font-size: ${Typography.FONT_SIZE_14}px;
  line-height: ${Typography.FONT_SIZE_16}px;
  color: ${DEFAULT_THEME.white};
`;

export const ViewMoreButton = styled.TouchableOpacity`
  height: 30px;
`;

export const ViewMoreText = styled(Text)`
  font-size: ${Typography.FONT_SIZE_14}px;
  line-height: ${Typography.FONT_SIZE_16}px;
  color: ${DEFAULT_THEME.primary};
  font-weight: 700;
`;
