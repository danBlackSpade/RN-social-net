import * as React from 'react';

import { KeyboardAvoidingView } from 'react-native';


export const Register = () => {
    
        return (
            <KeyboardAvoidingView
                behavior='padding'
                style={{ flex: 1 }}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
                <Text>Register</Text>
                <Button
                    title='Go to Login'
                    onPress={() => navigation.navigate('Login')}
                /> 
                </View>
            </KeyboardAvoidingView>
        );
}