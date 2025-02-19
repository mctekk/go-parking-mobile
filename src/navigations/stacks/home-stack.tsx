/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

// Modules
import React, { memo, useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import { Home } from 'screens/home';
import { Settings } from 'screens/settings';

// Styles
import { Colors } from 'styles';
import { DEFAULT_THEME, theme } from 'styles/theme';

// Molecules
import TabIcon from 'components/molecules/tab-icon';

// Context
import { UserContext } from 'components/context/user-context';

// Navigations
import { navigationScreen } from 'navigations/navigation-screen';
import ReceiptScreen from 'screens/parking-history';
import UserProfile from 'screens/user-profile';
import SavePlacesScreen from 'screens/save-places/indext';
import ParkingScreen from 'screens/parking';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigatior = ({ navigation }) => {

  const { userToken } = useContext(UserContext);

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => <TabIcon name={route.name.toLowerCase()} focused={focused} />,
        tabBarStyle: {
          backgroundColor: 'rgba(66, 66, 66, 1)',
          borderTopColor: 'rgba(24, 24, 24, 0.16)',
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ParkingScreen" component={ParkingScreen} />
      <Tab.Screen name="ParkingHistory" component={ReceiptScreen} />
      <Tab.Screen name="SavePlacesScreen" component={SavePlacesScreen} />
      <Tab.Screen name="UserProfile" component={UserProfile} />

    </Tab.Navigator>
  );
};


const HomeStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >

      <Stack.Screen
        name="TabNavigatior"
        component={TabNavigatior}
      />

      {navigationScreen.map((navScreen, index) => {
        return (
          <Stack.Screen
            key={index}
            name={navScreen.name}
            component={navScreen.screen}
            initialParams={navScreen.initialParams}
            options={({ route, navigation }) => ({
              ...navScreen.options,
            })}
          />
        );
      })}

    </Stack.Navigator>
  );
};

export default HomeStack;
