import * as React from 'react';
import { KeyboardAvoidingView, View, Text, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

import { AuthContext } from '../contexts/AuthContext';


export const Login = () => {

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
        <KeyboardAvoidingView
            behavior='padding'
            style={{ flex: 1 }}
        >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Login</Text>
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
                    label='Password'
                    value={password}
                    onChangeText={onChangePassword}
                />
                <TouchableOpacity onPress={login} style={{backgroundColor:'green', height:50, width: 150}}>
                    <Text>Login</Text>
                </ TouchableOpacity>
                <Button
                    title='Go to Register'
                    onPress={() => { 

                        navigation.navigate('Register'); }}
                />

                <TouchableOpacity onPress={console.log(' user HERE: ' + currentUser.email)}>
                    <Text>Forgot Password? TEST</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}


