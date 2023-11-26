import * as React from 'react';

import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';

import Background from '../components/Background';
import TextInput from '../components/TextInput';

const Post = () => {

    const theme = useTheme();
    return (
        <Background style={{ marginTop: 50, justifyContent: 'top' }}>
            {/* <Text>Post</Text> */}
            <TextInput 
                label='Título'
                // style={{ backgroundColor: theme.colors.primaryContainer, }}
            />
            <TextInput 
                label='Post'
                // style={{ backgroundColor: theme.colors.primaryContainer, }}
                multiline={true}
                numberOfLines={11}
                // placeholder='Escreva seu post aqui...'
            />
        </Background>
    )
};

export default React.memo(Post);

