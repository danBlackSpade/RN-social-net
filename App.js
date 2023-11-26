import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { Appearance, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';

import { MD3LightTheme, PaperProvider, MD3DarkTheme } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import { RootNavigator } from './screens/Drawer';
// components
import { StackNavigator } from './screens/Stack';
import { Main } from './screens/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { AppearanceProvider } from 'react-native-appearance';

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
  //   <PaperProvider theme={MD3LightTheme}>
  //     <NavigationContainer >
  //       <RootNavigator /> 
        
  //     </NavigationContainer>
  //   </PaperProvider>

    <SafeAreaProvider>
        <Main />  
    </SafeAreaProvider>
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

