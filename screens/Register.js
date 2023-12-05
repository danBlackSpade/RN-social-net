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

    async function sendRegister2(navigation) {
        console.log('sendRegister2'); 
        await fetch(`${API_URL}/users`, {
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
        }).then( async (response) => {

            let data = await response;
            if (data.status === 500 || data.status === 400 ) {
                console.log('error');
                console.log(JSON.stringify(data));
            } else {
                console.log('register success');
                // await AsyncStorage.setItem('userData', JSON.stringify(data));
                // let resData = await AsyncStorage.getItem('userData');
                // data = JSON.parse(resData);
                // setCurrentUser({'username': data.username, 'email': data.email, 'name': data.name, 'isLoggedIn': true});
                // console.log('User registered successfully : ' + data.email);
                // navigation.navigate('Feed');
            }
        }).catch((error) => {
            console.log('Error: ' + JSON.stringify(error));
        });
        
    
        // });
        // let data = await response.json();
        // if (data.status === 500 || data.status === 400) { 
        //     console.log(json);
        // } else {
        //     console.log('register success');
        //     console.log(data);
        //     // await AsyncStorage.setItem('userData', JSON.stringify(json));
        //     // let resData = await AsyncStorage.getItem('userData');
        //     // json = JSON.parse(resData);
        //     // setCurrentUser({'username': json.username, 'email': json.email, 'name': json.name, 'isLoggedIn': true});
        //     // console.log('User registered successfully : ' + json.email);
        //     // navigation.navigate('Feed');
        // }


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

    

});