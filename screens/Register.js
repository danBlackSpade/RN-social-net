import * as React from 'react';
import { View, Text, Touchable, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';

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
    const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);
    const [headerVisible, setHeaderVisible] = React.useState('flex');

    React.useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => { setKeyboardVisible(true); setHeaderVisible('none');  });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => { setKeyboardVisible(false); setHeaderVisible('flex'); });
        console.log('useEffect: Keyboard Check: ' + headerVisible + ' ' + isKeyboardVisible);
        // cleanup function
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();	
            // Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
            // Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
        };
        
    }, []);
    
    async function sendRegister(navigation) {
        let response = await fetch('http://192.168.1.130:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password, username: username, name: name }),
        });
        let json = await response.json();
        if (json === 'error') {
            setVisible('flex');
            setTimeout(() => {
                setVisible('none');
            }, 10000);
        } else {
            await AsyncStorage.setItem('userData', JSON.stringify(json));
            let resData = await AsyncStorage.getItem('userData');
            json = JSON.parse(resData);
            setCurrentUser({'username': json.username, 'email': json.email, 'name': json.name, 'isLoggedIn': true});
            console.log('User registered successfully : ' + json.email);
            navigation.navigate('Feed');
        }
    }

        return (
            <View style={{
                flex: 1,
                padding: 10,
                width: '100%',
                maxWidth: 340,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {/* <Text >Logo</Text> */}
                <Background>
                <View 
                // style={{display: headerVisible}}
                >
                    <Header >Crie sua conta
                    </Header>
                </View>
                
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
                    onPress={() => sendRegister(navigation) }
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
            </View>
        );
}

const styles = StyleSheet.create({ 
    header: (text="flex") => ({
        display: text,
    }),

    

});