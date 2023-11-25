import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { KeyboardAvoidingView } from 'react-native';

import { TextInput } from 'react-native-paper';



export const Register = () => {
    
        return (
            <KeyboardAvoidingView
                behavior='padding'
                style={{ flex: 1 }}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Register</Text>
                    <Button
                        title='Go to Login'
                        onPress={() => navigation.navigate('Login')}
                    /> 
                </View>
            </KeyboardAvoidingView>
        );
}