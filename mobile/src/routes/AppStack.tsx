import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from '../pages/Landing';
import PollutionInfo from '../pages/PollutionInfo';

export type RootStackParamList = {
  Landing: undefined; // undefined because you aren't passing any params to the home screen
  PollutionInfo: { city: string };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function AppStack() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="Landing" component={Landing} />
        <RootStack.Screen name="PollutionInfo" component={PollutionInfo} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
