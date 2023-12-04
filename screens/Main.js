import * as React from 'react';
import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    MD3DarkTheme,
} from 'react-native-paper';
import { I18nManager } from 'react-native';

import { PreferencesContext } from '../contexts/PreferencesContext';
import { AuthContext }  from '../contexts/AuthContext';
import { RootNavigator } from '../components/RootNavigator';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faThumbsUp, faThumbsDown, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as farThumbsUp, faThumbsDown as farThumbsDown } from '@fortawesome/free-regular-svg-icons';

library.add(faCheckSquare, faCoffee, faThumbsUp, faThumbsDown, farThumbsUp, farThumbsDown)
// 




export const Main = () => {

    React.useEffect(() => {
        checkUser();
        console.log('useEffect');
    }, []);

    const colorScheme = useColorScheme();
    const [theme, setTheme] = React.useState(colorScheme === 'dark' ? 'dark' : 'light');
    const [rtl, setRTL] = React.useState('left');

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    // const toggleRTL = React.useCallback(() => {
    //     setRTL(rtl === 'left' ? 'right' : 'left');
    // }, [rtl]);
    const toggleRTL = React.useCallback(() => {
        I18nManager.forceRTL(!rtl);
        Updates.reloadFromCache();
    }, [rtl]);

    const preferences = React.useMemo(
        () => ({
            toggleTheme,
            toggleRTL,
            rtl,
            theme,
        }),
        [rtl, theme, toggleRTL, toggleTheme]
    )



    const [currentUser, setCurrentUser] = React.useState({'username': null, 'email': null, 'isLogged': false });
    async function checkUser() {
        try {
            const value = await AsyncStorage.getItem('userData');
            if (value !== null) {
                setCurrentUser(JSON.parse(value));
                return currentUser;
            } else {
                setCurrentUser({ 'username': null, 'email': null, 'isLogged': false });
                console.log('no user');
                return null;
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        
        <PaperProvider
            theme={theme === 'light' 
                ? {
                    ...PaperDefaultTheme,
                    colors: { ...PaperDefaultTheme.colors}
                } 
                : {
                    ...MD3DarkTheme,
                    colors: { ...MD3DarkTheme.colors}
                }
            }
        >
            <PreferencesContext.Provider value={preferences}>
                <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
                    <RootNavigator />
                </AuthContext.Provider>
            </PreferencesContext.Provider>
        </PaperProvider>
    
    );
};




