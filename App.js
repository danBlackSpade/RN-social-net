import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

import { MD3LightTheme, PaperProvider, MD3DarkTheme as MD3DarkTheme, useTheme } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import { RootNavigator } from './screens/Drawer';
// components
import { StackNavigator } from './screens/Stack';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    // primary: 'red',
    // secondary: 'red',
    // brandPrimary: '#fefefe',
    // brandSecondary: 'red',
  }
}
// export const appTheme = () => useTheme();

export default function App() {
  return (
    <PaperProvider theme={MD3LightTheme}>
      <NavigationContainer initialRouteName='FeedStack' component={StackNavigator} >
        <RootNavigator> 
          <StackNavigator />
        </ RootNavigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent(appName, () => App);

