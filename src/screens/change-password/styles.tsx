// Modules
import React from 'react';
import styled from 'styled-components/native';

// Styles
import { DEFAULT_THEME } from 'styles/theme';

// Molecules
import Header from 'components/molecules/header';
import TextInput from 'components/molecules/text-input';

// Atoms
import CustomButton from 'components/atoms/button';

const HEADER_HEIGHT = 130;

export const Container = styled.View`
  flex: 1;
  background-color: ${DEFAULT_THEME.background};
  border-radius: 25px;
  padding-horizontal: 20px;
`;

export const ScreenHeader = styled(Header)``;

export const Content = styled.View`
  flex: 1;
`;

export const Input = styled(TextInput)`
  margin-top: 20px;
`;

export const Button = styled(CustomButton)`
  height: 50px;
  border-radius: 50px;
`;
