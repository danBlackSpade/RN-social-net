import * as React from 'react';
import { KeyboardAvoidingView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


import TextInput from '../components/TextInput';
import { AuthContext } from '../contexts/AuthContext';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';


export const Login = ({ navigation }) => {
    const theme = useTheme();

    // user
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [username, onChangeUsername] = React.useState('');
    const { currentUser, setCurrentUser } = React.useContext(AuthContext);
    const [display, setDisplay] = React.useState('none'); // [display, setDisplay

    // display/hide component
    const [visible, setVisible] = React.useState('none');


    // tests
    const u1 = {
        email: 'e1@e.com',
        password: '123',
        username: 'u1',
    };

    async function sendLogin(navigation) {
    
        let response = await fetch('http://192.168.1.130:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        });
        let json = await response.json();
        
        if (json === 'error') {
            console.log('Incorrect email or password');
            setVisible('flex');
            setTimeout(() => {
                setVisible('none');

            }, 10000);
        } else {
            await AsyncStorage.setItem('userData', JSON.stringify(json));
            let resData = await AsyncStorage.getItem('userData');
            json = JSON.parse(resData);
            await setCurrentUser({ 
                email: json.email,
                username: json.username,
                name: json.name,
                isLogged: true,
            });
            console.log('Logged In! EMAIL:::: ' + currentUser.email);
            navigation.navigate('Feed');
        }

    }

    return (
        <Background>
                <Text>Logo </Text>
                <Header>Bem vindo de volta</Header>
                <TextInput
                    label='Email'
                    value={email}
                    onChangeText={onChangeEmail}
                    returnKeyType='next'
                    autoCapitalize='none'
                    autoCompleteType='email'
                    textContentType='emailAddress'
                    keyboardType='email-address'
                /> 
                
                <TextInput
                    label='Senha'
                    value={password}
                    onChangeText={onChangePassword}
                    returnKeyType='done'
                    secureTextEntry
                    
                />
                <View>
                    <Text style={styles.login_msg_error(visible)}>Usuário ou senha inválidos!</Text>
                </View>
                <TouchableOpacity onPress={console.log(' user HERE: ' + currentUser.email)}>
                    <Text>Forgot Password? TEST</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={login} style={{backgroundColor:'green', height:50, width: 150}}>
                    <Text>Login</Text>
                </ TouchableOpacity> */}
                <Button
                    onPress={ () => { sendLogin(navigation) } }
                >ENTRAR</Button>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,

                }}>
                    <Text style={{ color:theme.colors.secondary }}> Não possui uma conta? </Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('Register') }}>
                        <Text style={{ fontWeight: 'bold', color: theme.colors.primary }}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            
        </Background>
    );
}

const styles = StyleSheet.create({ 
    login_msg_error: (text='none') => ({
        color: 'red',
        display: text,
        fontWeight: 'bold',
        margin: 5,
        fontSize: 15,
    }),
});