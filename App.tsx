// Modules
import React, { useEffect } from 'react';
import styled from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';

// Navigations
import { MainStack } from 'navigations';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
