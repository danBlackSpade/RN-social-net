import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../screens/Drawer';
import { StackNavigator } from '../screens/Stack';

import { DefaultTheme,  Provider as PaperProvider, useTheme, MD3DarkTheme } from 'react-native-paper';



const DrawerNav = createDrawerNavigator();

export const RootNavigator = () => {
    const theme = useTheme();
    const navigationTheme = theme.dark ? MD3DarkTheme : DefaultTheme;

        return (
            <NavigationContainer theme={navigationTheme}>
                <DrawerNav.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
                    <DrawerNav.Screen name="DrawerNav" component={StackNavigator} options={{ headerShown: false }} />
                </DrawerNav.Navigator>
            </NavigationContainer>
    );
};