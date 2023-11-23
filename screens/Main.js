import * as React from 'react';
import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    MD3DarkTheme,
} from 'react-native-paper';
import { I18nManager } from 'react-native';

import { PreferencesContext } from '../contexts/preferencesContext';
import { RootNavigator } from '../components/RootNavigator';
import { useColorScheme } from 'react-native';






export const Main = () => {

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


    return (
        <PreferencesContext.Provider value={preferences}>
            <PaperProvider
                theme={theme === 'dark' 
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
                <RootNavigator />
            </PaperProvider>
        </PreferencesContext.Provider>
    );
};




