import * as React from 'react';
import { KeyboardAvoidingView, View, Text, Button } from 'react-native';

import authContext from '../contexts/authContext';


export const Login = () => {

    // user
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [username, onChangeUsername] = React.useState('');
    const { currentUser, setCurrentUser } = React.useContext(authContext);

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
            setCurrentUser(u1);
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
                <Button
                    title='Go to Register'
                    onPress={() => { console.log('CURRENTUSER HERE ' + currentUser); 
                        navigation.navigate('Register'); }}
                />
            </View>
        </KeyboardAvoidingView>
    );
}


