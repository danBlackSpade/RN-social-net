import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    DrawerItem,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './Stack';


const DrawerNav = createDrawerNavigator();
function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}
export const RootNavigator = () => {
        return (
            <DrawerNav.Navigator drawerContent={() => <DrawerContent />}>
                <DrawerNav.Screen name="Home" component={StackNavigator} options={{ headerShown: false }} />
            </DrawerNav.Navigator>
    );
};



// components


// function DrawerContent() {
//     return (
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
//         <Text>Drawer Content</Text>
//         </View>
//     )
// }


export function DrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} >
            <View
                style={styles.drawerContent}
            >
                <View style={styles.userInfoSection}>
                    <Avatar.Image 
                        source={{
                            uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                        }}
                        size={50}
                    />
                    <Title style={styles.title}>Douglas Silva</Title>
                    <Caption style={styles.caption}>@trendsit2023</Caption>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>
                                202
                            </Paragraph>
                            <Caption style={styles.caption}>Likes|msgs</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>
                                159
                            </Paragraph>
                            <Caption style={styles.caption}>Liked|Friends</Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="account-outline"
                            color={color}
                            size={size}
                        />
                        )}
                        label="Profile"
                        onPress={() => {}}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                        <MaterialCommunityIcons name="tune" color={color} size={size} />
                        )}
                        label="Preferences"
                        onPress={() => {}}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="bookmark-outline"
                            color={color}
                            size={size}
                        />
                        )}
                        label="Friends"
                        onPress={() => {}}
                    />
                    </Drawer.Section>
                    <Drawer.Section title="Menu 2">
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.preference}>
                        <Text>Dark Theme</Text>
                        <View pointerEvents="none">
                            <Switch value={false} />
                        </View>
                        </View>
                    </TouchableRipple>

                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    });

