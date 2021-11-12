import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from '../pages/Landing';
import PollutionInfo from '../pages/PollutionInfo';

const { Navigator, Screen } = createNativeStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="PollutionInfo" component={PollutionInfo} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
