import * as React from 'react';
import { KeyboardAvoidingView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
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

    // display/hide component
    const [visible, setVisible] = React.useState('none');


    // tests
    const u1 = {
        email: 'e1@e.com',
        password: '123',
        username: 'u1',
    };

    // React.useEffect(() => {
    // //     if (currentUser) {
    // //         setVisible('flex');
    // //     } else {
    // //         setVisible('none');
    // //     }
    // // }, [currentUser]);
    //     setCurrentUser(u1);
    //     // currentUser ? console.log(currentUser) : console.log('no user');
    // }, []);

    async function login() {
        // try {
        //     await firebase.auth().signInWithEmailAndPassword(email, password);
        //     console.log('Logged In!');
        // } catch (error) {
        //     console.log(error);
        // }
        if (email === u1.email && password === u1.password) {
            console.log('Logged In!');
            setCurrentUser({
                email: email,
                password: password,
                username: 'u1',
                isLogged: true,
            });
        } else {
            console.log('Incorrect email or password');
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
                />
                <TouchableOpacity onPress={console.log(' user HERE: ' + currentUser.email)}>
                    <Text>Forgot Password? TEST</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={login} style={{backgroundColor:'green', height:50, width: 150}}>
                    <Text>Login</Text>
                </ TouchableOpacity> */}
                <Button
                    onPress={ login }
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

