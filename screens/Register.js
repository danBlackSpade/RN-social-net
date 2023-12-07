import * as React from 'react';
import { View, Text, Touchable, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';

import { KeyboardAvoidingView } from 'react-native';
import { useTheme } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { TextInput } from 'react-native-paper';
import Background from '../components/Background';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { AuthContext } from '../contexts/AuthContext';
import { API_URL } from '../config/constants';

export const Register = ({ navigation }) => {
    const theme = useTheme();

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [username, onChangeUsername] = React.useState('');
    const [visible, setVisible] = React.useState('none');
    const [name, onChangeName] = React.useState(''); 
    const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);
    const [headerVisible, setHeaderVisible] = React.useState('flex');
    const { currentUser, setCurrentUser } = React.useContext(AuthContext);
    const [errorMessage, setErrorMessage] = React.useState('');

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
        let response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                name: name,
                email: email, 
                password: password, 
                username: username, 
            }),
        });
        let json = await response.json();
        let stringifiedJson = JSON.stringify({
            email: json.email,
            username: json.username,
            name: json.name,
            _id: json._id,
            isLoggedIn: true,
        });

        if (json === 'error') {
            setVisible('flex');
            setTimeout(() => {
                setVisible('none');
            }, 10000);
        } else {
            await AsyncStorage.setItem('userData', stringifiedJson);
            let resData = await AsyncStorage.getItem('userData');
            json = JSON.parse(resData);
            // setCurrentUser({'username': json.username, 'email': json.email, 'name': json.name, 'isLoggedIn': true, _id: json._id});
            console.log('User registered successfully : ' + json.email);
            navigation.navigate('Feed');
        }
    }

    async function sendRegister2(navigation) {
        console.log('sendRegister2'); 
        let response = await fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ 
                name: name,
                email: email, 
                password: password, 
                username: username, 
            }),
        });
        let data = await response;
        console.log('data : ' + data);
        if(data.status === 500 || data.status === 400){
            let msg = await data.json();
            setErrorMessage(msg.message);
            console.log('error');
            console.log(msg.message);
            console.log(data.status)
            setVisible('flex');
            setTimeout(() => {
                setVisible('none');
            }, 10000);
        } else {
            let json = await response.json();
            let stringifiedJson = JSON.stringify({
                email: json.email,
                username: json.username,
                name: json.name,
                _id: json._id,
                isLoggedIn: true,
            });
            console.log(json);
            console.log('register success');
            await AsyncStorage.setItem('userData', stringifiedJson);
            let resData = await AsyncStorage.getItem('userData');
            console.log(resData)
            let storageData = JSON.parse(resData);
            setCurrentUser(storageData);
            console.log('User registered successfully : ' + storageData.email);
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
                    value={name}
                    // onChangeText={text => onChangeName({ value: text, error: '' })}
                    onChangeText={onChangeName}
                    // error={!!name.error}
                    // errorText={name.error}
                />

                <TextInput 
                    label='Nome de usuário'
                    returnKeyType='next'
                    value={username}
                    onChangeText={onChangeUsername}
                />

                <TextInput 
                    label='Email'
                    returnKeyType='next'
                    value={email}
                    onChangeText={onChangeEmail}
                    autoCapitalize='none'
                    autoCompleteType='email'
                    textContentType='emailAddress'
                    keyboardType='email-address'
                />

                <TextInput
                    label='Senha'
                    returnKeyType='done'
                    value={password}
                    onChangeText={onChangePassword}
                    secureTextEntry
                />

                <View>
                    <Text style={styles.login_msg_error(visible)}>{errorMessage}</Text>
                </View>

                <Button
                    onPress={() => sendRegister2(navigation) }
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
    login_msg_error: (text='none') => ({
        color: 'red',
        display: text,
        fontWeight: 'bold',
        margin: 0,
        fontSize: 15,
    }),
    

});

