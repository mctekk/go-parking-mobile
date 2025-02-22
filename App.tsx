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
import * as Sentry from '@sentry/react-native';

// Sentry.init({
//   dsn: 'https://d0f2ac947f9d97ef2067bd7559eea8a6@o198934.ingest.us.sentry.io/4508858929774592',
//   // uncomment the line below to enable Spotlight (https://spotlightjs.com)
//   // spotlight: __DEV__,
// });

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
