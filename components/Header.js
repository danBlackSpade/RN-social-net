import * as React from 'react';
import { Text, StyleSheet } from 'react-native'

import { useTheme } from 'react-native-paper';

const Header = ({ children }) => {
    const theme = useTheme();

    return (
        <Text style={{
            fontSize: 26,
            fontWeight: 'bold',
            color: theme.colors.primary,
            paddingVertical: 14,
            // paddingHorizontal: 16,
            // ...StyleSheet.absoluteFillObject,
            zIndex: 100,
        }}
        >{children}</Text>
    )
}


export default React.memo(Header);   

