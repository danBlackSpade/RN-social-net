import * as React from 'react';

import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { useTheme, ToggleButton } from 'react-native-paper';

import Background from '../components/Background';
import TextInput from '../components/TextInput';
import Header from '../components/Header';
import Button from '../components/Button';

import { API_URL } from '../config/constants';

const Post = () => {

    const theme = useTheme();

    const [title, onChangeTitle] = React.useState('');
    const [content, onChangeContent] = React.useState('');
    const [isPublic, setIsPublic] = React.useState(null);

    // sendPost - title, body, isPublic
    // async function sendPost(navigation) { }

    async function createPost() {
        await fetch(`${API_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                content: content,
                isPublic: isPublic,
            })
        })
        .then( async (response) => {
            let data = await response;
            console.log(JSON.stringify(data));
            if (data.status === 201) {
                console.log('Post created');
            } else {
                console.log('error');
                console.log(JSON.stringify(data));
            }
        })

    }
    // async function createPost() {
    //     let response = await fetch(`${API_URL}/create-post`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             title: title,
    //             content: content,
    //             isPublic: isPublic,
    //         })
    //     });
    //     let json = await response.json();
    //     if (json === 'error') {
    //         console.log('error');
    //     } else {
    //         console.log('creating.. '  + JSON.stringify(json));
    //     }

    // }

    return (
        <View
            style={{
                flex: 1,
                padding: 10,
                width: '100%',
                maxWidth: 340,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                
            }}
        >
        
            <Background style={{ marginTop: 50, justifyContent: 'top' }}>

                <Header>Crie seu post</Header>
                {/* <Text>Post</Text> */}
                
                <TextInput 
                    value={title}
                    label='Título'
                    onChangeText={onChangeTitle}
                    // style={{ backgroundColor: theme.colors.primaryContainer, }}
                />
                <TextInput 
                    value={content}
                    label='Mensagem'
                    onChangeText={onChangeContent}
                    // style={{ backgroundColor: theme.colors.primaryContainer, }}
                    multiline={true}
                    numberOfLines={9}
                    // placeholder='Escreva seu post aqui...'
                />
                <View style={{ flexDirection: 'row', width: '100%',  justifyContent: 'space-between' }}>
                    <Text style={{ color: theme.colors.onBackground, alignSelf: 'center', fontWeight: 'bold' }} >Modo: </Text>
                    <Pressable style={ 
                        ({pressed}) => [{
                            backgroundColor: isPublic ? theme.colors.tertiary : theme.colors.secondary,
                            opacity: isPublic ? 1 : 0.5,
                            width: '30%',
                            marginVertical: 0,
                            borderRadius: 10,
                            // backgroundColor: theme.colors.primary,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }]
                    } 
                        onPress={() => {
                            setIsPublic(true)
                            console.log(isPublic);
                        }}
                    >
                        <Text style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: theme.colors.onPrimary,
                        }}>Público</Text>
                    </Pressable>
                    <Pressable style={ 
                        ({pressed}) => [{
                            backgroundColor: !isPublic ? theme.colors.tertiary : theme.colors.secondary,
                            opacity: !isPublic ? 1 : 0.5,
                            width: '30%',
                            marginVertical: 0,
                            borderRadius: 10,
                            // backgroundColor: theme.colors.primary,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            
                        }]
                    } 
                        onPress={() => {
                            setIsPublic(false);
                            console.log(isPublic);
                        }}
                    >
                        <Text style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: theme.colors.onPrimary,
                        }}>Privado</Text>
                    </Pressable>

                </View>
                <Button onPress={createPost} mode="contained" style={{ marginTop: 12 }}>
                    PUBLICAR
                </Button>
        </Background>
        </View>
    )
};

export default React.memo(Post);


// const styles = StyleSheet.create({ 
//     touchable: {
//         width: '100%',
//         marginVertical: 10,
//         borderRadius: 10,
//         backgroundColor: theme.colors.primary,
//         height: 50,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     txt: {
//         fontSize: 15,
//         fontWeight: 'bold',
//         lineHeight: 26, 
//         color: theme.colors.onPrimary,
//     }
// });


