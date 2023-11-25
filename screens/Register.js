import * as React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';

import { KeyboardAvoidingView } from 'react-native';
import { useTheme } from 'react-native-paper';

// import { TextInput } from 'react-native-paper';
import Background from '../components/Background';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

export const Register = ({ navigation }) => {
    const theme = useTheme();

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [username, onChangeUsername] = React.useState('');
    const [visible, setVisible] = React.useState('none');
    const [name, onChangeName] = React.useState(''); 
    
        return (
            <Background>
                <Header>Crie sua conta</Header>

                <TextInput 
                    label='Nome'
                    returnKeyType='next'
                    value={name.value}
                    onChangeText={text => onChangeName({ value: text, error: '' })}
                    error={!!name.error}
                    errorText={name.error}
                />

                <TextInput 
                    label='Nome de usuário'
                    returnKeyType='next'
                    value={name.value}
                    onChangeText={text => onChangeName({ value: text, error: '' })}
                    error={!!name.error}
                    errorText={name.error}
                />

                <TextInput 
                    label='Email'
                    returnKeyType='next'
                    value={email.value}
                    onChangeText={text => onChangeEmail({ value: text, error: '' })}
                    error={!!email.error}
                    errorText={email.error}
                    autoCapitalize='none'
                    autoCompleteType='email'
                    textContentType='emailAddress'
                    keyboardType='email-address'
                />

                <TextInput
                    label='Senha'
                    returnKeyType='done'
                    value={password.value}
                    onChangeText={text => onChangePassword({ value: text, error: '' })}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry
                />

                <Button
                    onPress={() => console.log('register')}
                    style={{ marginTop: 24 }}
                >
                REGISTRAR    
                </Button>

                <View style={{ flexDirection: 'row', marginTop: 4 }}>
                    <Text style={{ color: theme.colors.secondary }} >Já tem uma conta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>

                        <Text style={{ fontWeight: 'bold', color: theme.colors.primary }} >Entrar</Text> 
                    </TouchableOpacity>
                </View>

            </Background>
        );
}