import * as React from 'react';

import { 
    KeyboardAvoidingView,
    ImageBackground,
    StyleSheet,
} from 'react-native';


const Background = ({ children }) => (
    <ImageBackground
        source={require('../assets/background_dot.png')}
        resizeMode='repeat'
        style={styles.background}
    >
        <KeyboardAvoidingView
            behavior='padding'
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            {children}
        </KeyboardAvoidingView>
    </ImageBackground>
);


const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        // backgroundColor: '#faa',
    },

    container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }   
});


export default React.memo(Background);

