import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { PaperProvider } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import { RootNavigator } from './screens/Drawer';
// components
import { FeedStack } from './screens/FeedStack';


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer >
        <RootNavigator />
        {/* <FeedStack /> */}
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

