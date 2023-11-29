import React from 'react';
import color from 'color';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme, Portal, FAB } from 'react-native-paper';
import { useIsFocused, RouteProp } from '@react-navigation/native';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Overlay from '../utils/Overlay';
import { Feed } from './Feed';
import { Details } from './Details';
import Post from './Post';
// import { Message } from './Message';
// import { Notifications } from './notifications';
// import { StackNavigatorParamlist } from './types';
import { appTheme } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp, faBell, faHouse, faPlus } from '@fortawesome/free-solid-svg-icons';
import Likes from './Likes';
import Notifications from './Notifications';
// import { faBell } from '@fortawesome/free-regular-svg-icons';

const Tab = createMaterialBottomTabNavigator();

// type Props = {
// route: RouteProp<StackNavigatorParamlist, 'FeedList'>;
// };

export const BottomTabs = ({ props, route, navigation }) => {
// const routeName = props.route.state
//     ? props.route.state.routes[props.route.state.index].name
//     : 'Feed';
    const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'Feed';

const theme = useTheme();

const isFocused = useIsFocused();

let icon = 'feather';

switch (routeName) {
    case 'Feed':
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
        barStyle={{ backgroundColor: theme.colors.background }}
        initialRouteName="Feed"
        backBehavior="initialRoute"
        shifting={false}
        activeColor={theme.colors.secondary}
        inactiveColor={color(theme.colors.onBackground)
            .alpha(0.25)
            .rgb()
            .string()}
        
        labeled={true}
        sceneAnimationEnabled={false}
    >
        <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon icon={faHouse} size={26} color={color} />
                ),
                tabBarColor,
        }}
        />
        <Tab.Screen
            tabBarLabel={{ color: 'red' }}
            name="Notificações"
            component={Notifications}
            options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon icon={faBell} size={26} color={color} />
                ),
                tabBarColor,
        }}
        />
        <Tab.Screen
            name="Gostei"
            component={Likes}
            options={{
                tabBarIcon: ({ color }) => (
                    // <MaterialCommunityIcons name='bookmark-outline' color={color} size={26}/>
                    <FontAwesomeIcon icon={faThumbsUp} size={26} color={color} />
                ),
                tabBarColor,
        }}
        />
    </Tab.Navigator>
    
    <Portal>
        <SafeAreaView style={{flex:1}}>
            <FAB
                visible={isFocused}
                // icon={icon}
                icon={({color, size }) => ( 
                    <FontAwesomeIcon icon={faPlus} size={size} color={color} />
                )}
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
                onPress={() => {navigation.navigate('Post')} }
                />
            {/* <Text>{theme.colors.primary}</Text> */}
        </ SafeAreaView>
    </Portal>
    
    </React.Fragment>
    
);
};