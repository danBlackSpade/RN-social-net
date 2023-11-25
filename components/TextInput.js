import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput as TextInputPaper, useTheme } from 'react-native-paper';


const TextInput = ({errorText, ...props}) => {
    const theme = useTheme();


    return (
        <View style={styles.container}>
            <TextInputPaper
                // style={styles.input}
                selectionColor={theme.colors.primary}
                // backgroundColor={theme.colors.surface}
                underlineColor='transparent'
                mode='outlined'
                {...props}
            />

            {
            errorText 
            ? <Text style={{
                    fontSize: 14,
                    color: theme.colors.error,
                    paddingHorizontal: 4,
                    paddingTop: 4,
                }}>{errorText}</Text> 
            : null
            }
        </View>
    );
}



const styles = StyleSheet.create({
    
    container: {
        width: '100%',
        marginVertical: 12, 
    },
    input: {
    }
});

export default React.memo(TextInput);