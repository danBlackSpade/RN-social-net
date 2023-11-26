import * as React from 'react';
import { Button as ButtonPaper, useTheme } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = ({ mode, style, children, ...props }) => {
    const theme = useTheme();

    return (
        <TouchableOpacity
            style={{
                width: '100%',
                marginVertical: 10,
                borderRadius: 10,
                backgroundColor: theme.colors.primary,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                ...style,

            }}            
            {...props}
        >
        <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            lineHeight: 26, 
            color: theme.colors.onPrimary,
        
        }}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        // marginVertical: 10,
        borderRadius: 20,
        // paddingVertical: 5,
        width: '100%',
        marginVertical: 10,
    }
});


export default React.memo(Button);
