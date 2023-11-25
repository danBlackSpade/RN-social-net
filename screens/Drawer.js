import * as React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
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
import { PreferencesContext } from '../contexts/PreferencesContext';
import { AuthContext } from '../contexts/AuthContext';






// components


// function DrawerContent() {
//     return (
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
//         <Text>Drawer Content</Text>
//         </View>
//     )
// }

// const fadeAnim = React.useRef(new Animated.Value(0)).current;
export function DrawerContent({ props, navigation }) {

    const paperTheme = useTheme();
    const { rtl, theme, toggleTheme, toggleRTL } = React.useContext(
        PreferencesContext
    );

    
    const { currentUser, setCurrentUser } = React.useContext(AuthContext);

    // const translateX = new Animated.interpolateNode(props.progress, {
    //     inputRange: [0, 0.5, 0.7, 0.8, 1],
    //     outputRange: [-100, -85, -70, -45, 0],
    // });
    return (
        <DrawerContentScrollView {...props}  style={{flex: 1, backgroundColor: paperTheme.colors.surfaceVariant}} >
            <View

                // style={[
                //     styles.drawerContent,
                //     {
                //         backgroundColor: paperTheme.colors.surface,
                //         transform: [{ translateX }],
                //     },
                //     ]}
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
                            <Caption style={styles.caption}>Likes|msgs?</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>
                                159
                            </Paragraph>
                            <Caption style={styles.caption}>Liked|Friends?</Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>

                    {/* create if currentUser,loggedIn */}
                    { currentUser.isLogged
                    ? (
                        <DrawerItem
                        icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="account-outline"
                            color={paperTheme.colors.secondary}
                            size={size}
                        />
                        )}
                        label={() => (<Text style={{color: paperTheme.colors.secondary}}>Profile</Text>)}
                        onPress={() => {}}
                    />
                    )
                    : (
                    <DrawerItem
                        icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="login"
                            color={paperTheme.colors.secondary}
                            size={size}
                        />
                        )}
                        label={() => (<Text style={{color: paperTheme.colors.secondary}}>Login or Register</Text>)}
                        onPress={() => { navigation.navigate('Login'); }}
                    />
                    )
                    }


                    {/* <DrawerItem
                        icon={({ color, size }) => (
                        <MaterialCommunityIcons name="tune" color={paperTheme.colors.secondary} size={size} />
                        )}
                        label={() => (<Text style={{color: paperTheme.colors.secondary}}>Preferences</Text>)}
                        onPress={() => {}}
                    /> */}
                    <DrawerItem
                        icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="bookmark-outline"
                            color={paperTheme.colors.secondary}
                            size={size}
                        />
                        )}
                        label={ () => (<Text style={{color: paperTheme.colors.secondary}}> Friends? svd posts?</Text>) }
                        onPress={() => {}}
                    />
                    </Drawer.Section >
                    <Drawer.Section  style={styles.preferences}>
                    <Title style={styles.preferences}>Preferences</Title>
                    
                    <TouchableRipple onPress={toggleTheme}>
                        <View style={styles.preference}>
                        <Text>Dark Theme</Text>
                        <View pointerEvents="none">
                            <Switch value={paperTheme.dark} />
                        </View>
                        </View>
                    </TouchableRipple>
                    <Caption style={styles.drawerFooter}>Made By Daniel Jun</Caption>
                    <Caption style={styles.drawerFooter2}>github.com/danBlackSpade</Caption>
                </Drawer.Section>
            </ View>
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
    preferences: {
        marginLeft: 15,
        fontWeight: 'bold',
    },
    drawerFooter: {
        marginTop: 100,
        textAlign: 'center',
        fontSize: 12,
        lineHeight: 12,
    },
    drawerFooter2: {
        marginTop: 0,
        textAlign: 'center',
        fontSize: 9,
        
    }
    });

