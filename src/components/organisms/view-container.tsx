import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components/native";
import { DEFAULT_THEME } from "styles/theme";

interface IViewContainerProps {
  children: React.ReactNode;
  headerViewStyles?: any;
};

const Container = styled.View`
  flex: 1px;
`;

const HeaderView = styled.View`
  width: 100%;
  height: 25%;
  background-color: ${DEFAULT_THEME.primary};
  position: absolute;
  top: 0;
`;

const ContentView = styled.View`
  flex: 1;
  background-color: ${DEFAULT_THEME.background};
`;

export const ViewContainer = (props: IViewContainerProps) => {

  // Props
  const {
    children,
    headerViewStyles = {},
  } = props;

  return (
    <Container>
      <ContentView>
      <HeaderView
        style={headerViewStyles}
      />
        {children}
      </ContentView>
    </Container>
  );
};

export default ViewContainer;
