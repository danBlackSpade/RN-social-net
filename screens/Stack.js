import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Appbar, Avatar, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { BottomTabs } from './BottomTabs';
import { Details } from './Details';
import { Feed } from './Feed';

const Stack = createStackNavigator();


export const StackNavigator = () => {
    const theme = useTheme();


    return (
        <Stack.Navigator
            
            initialRouteName='FeedList'
            // headerMode='screen'
            
            screenOptions={{
                headerStyle: { backgroundColor: 'black' },
                headerMode: 'screen',
                header: ({ navigation, route, options, back }) => {
                    
                    const title = getHeaderTitle(options, route.name);

                    return (
                        <Appbar.Header
                            mode='center-aligned'
                            theme={{ colors: { primary: theme.colors.surface } }}
                        >
                        {back ? (
                            <Appbar.BackAction
                            onPress={navigation.goBack}
                            color={theme.colors.primary}
                            />
                        ) : (
                            <TouchableOpacity
                            style={{ marginLeft: 10 }}
                            onPress={() => {
                                ((navigation)).openDrawer();
                            }}
                            >
                            <MaterialCommunityIcons 
                                // style={}
                                name='menu'
                                size={40}
                                color={theme.colors.primary}
                            />
                            {/* <Avatar.Image
                                size={40}
                                source={{
                                uri:
                                    'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                                }}
                            /> */}
                            </TouchableOpacity>
                        )}
                        <Appbar.Content
                            title={
                            title === 'Feed' ? (
                                <MaterialCommunityIcons
                                style={{ marginRight: 10 }}
                                name="twitter"
                                size={40}
                                color={theme.colors.primary}
                                />
                            ) : (
                                title
                            )
                            }
                            titleStyle={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: theme.colors.primary,
                            }}
                        />
                        </Appbar.Header>
                    );
                }
            }}
        >
        <Stack.Screen
            name="FeedList"
            screenOptions={{headerTitleAlign:'center'}}
            
            component={BottomTabs}
            options={({ route }) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
                return { headerTitle: routeName };
            }}

        />
        <Stack.Screen
            headerTitleStyle={{ 
                textAlign:"center", 
                flex:1 
            }}
            name="Details"
            component={Details}
            options={{ headerTitle: 'Post' }}
        />
        </Stack.Navigator>
    )

}