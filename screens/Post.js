import * as React from 'react';

import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

import Background from '../components/Background';
import TextInput from '../components/TextInput';
import Header from '../components/Header';

const Post = () => {

    const theme = useTheme();
    return (

        
        <Background style={{ marginTop: 50, justifyContent: 'top' }}>
            {/* <Text>Post</Text> */}
            <Header>Crie seu post</Header>
            <TextInput 
                label='Título'
                // style={{ backgroundColor: theme.colors.primaryContainer, }}
            />
            <TextInput 
                label='Post'
                // style={{ backgroundColor: theme.colors.primaryContainer, }}
                multiline={true}
                numberOfLines={13}
                // placeholder='Escreva seu post aqui...'
            />
        </Background>
    )
};

export default React.memo(Post);

