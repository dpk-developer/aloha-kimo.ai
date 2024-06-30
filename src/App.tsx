import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationStrings } from './Constants';
import { DashboardScreen, SurfingScreen } from './Screens';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.containerStyle}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={NavigationStrings.HOME} screenOptions={{ headerShown: false }}>
          <Stack.Screen name={NavigationStrings.HOME} component={DashboardScreen} />
          <Stack.Screen name={NavigationStrings.SURFING} component={SurfingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;