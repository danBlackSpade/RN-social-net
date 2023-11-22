import React from 'react';
import color from 'color';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme, Portal, FAB } from 'react-native-paper';
import { useIsFocused, RouteProp } from '@react-navigation/native';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

import Overlay from '../utils/Overlay';
import { Feed } from './Feed';
import { Details } from './Details';
// import { Message } from './Message';
// import { Notifications } from './notifications';
// import { StackNavigatorParamlist } from './types';
import { appTheme } from '../App';

const Tab = createMaterialBottomTabNavigator();

// type Props = {
// route: RouteProp<StackNavigatorParamlist, 'FeedList'>;
// };

export const BottomTabs = (props) => {
const routeName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : 'Feed';

const theme = useTheme();

const isFocused = useIsFocused();

let icon = 'feather';

switch (routeName) {
    case 'Messages':
    icon = 'email-plus-outline';
    break;
    default:
    icon = 'feather';
    break;
}

const tabBarColor = theme.dark
    ? (Overlay(6, theme.colors.surface))
    : theme.colors.surface;

return (
    
    <React.Fragment>
        
    <Tab.Navigator
        initialRouteName="Feed"
        backBehavior="initialRoute"
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={color(theme.colors.text)
        .alpha(0.6)
        .rgb()
        .string()}
        sceneAnimationEnabled={false}
    >
        <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
            tabBarIcon: 'home-account',
            tabBarColor,
        }}
        />
        <Tab.Screen
        name="Notifications"
        component={Feed}
        options={{
            tabBarIcon: 'bell-outline',
            tabBarColor,
        }}
        />
        <Tab.Screen
        name="Messages"
        component={Details}
        options={{
            tabBarIcon: 'message-text-outline',
            tabBarColor,
        }}
        />
    </Tab.Navigator>
    
    
    <Portal>
        <SafeAreaView style={{flex:1}}>
            <FAB
            visible={isFocused}
            icon={icon}
            style={{
                position: 'absolute',
                bottom: 95,
                right: 16,
            }}
            color="black"
            theme={{
                colors: {
                    // accent: theme.colors.primary,
                },
            }}
            onPress={() => {alert(theme.colors.background)}}
            />
            {/* <Text>{theme.colors.primary}</Text> */}
        </ SafeAreaView>
    </Portal>
    
    </React.Fragment>
    
);
};