import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components/native";
import { DEFAULT_THEME } from "styles/theme";

interface IViewContainerProps {
  children: React.ReactNode;
  headerChildren?: React.ReactNode;
  headerViewStyles?: any;
  contentViewStyles?: any;
};

const Container = styled.View`
  flex: 1px;
  background-color: ${DEFAULT_THEME.primary};
`;

const HeaderView = styled.View`
  width: 100%;
  background-color: ${DEFAULT_THEME.primary};
`;

const ContentView = styled.View`
  flex: 1;
  background-color: ${DEFAULT_THEME.background};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ViewContainer = (props: IViewContainerProps) => {

  // Props
  const {
    headerChildren,
    children,
    headerViewStyles = {},
    contentViewStyles = {},
  } = props;

  return (
    <Container>
      <HeaderView
        style={headerViewStyles}
      >
        {headerChildren}
      </HeaderView>
      <ContentView
        style={contentViewStyles}
      >
        {children}
      </ContentView>
    </Container>
  );
};

export default ViewContainer;
