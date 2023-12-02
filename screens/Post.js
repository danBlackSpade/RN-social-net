import * as React from 'react';

import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { useTheme, ToggleButton } from 'react-native-paper';

import Background from '../components/Background';
import TextInput from '../components/TextInput';
import Header from '../components/Header';
import Button from '../components/Button';

const Post = () => {

    const theme = useTheme();

    const [isPrivate, setIsPrivate] = React.useState(null);

    // sendPost - title, body, isPrivate
    // async function sendPost(navigation) { }

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
                    label='Título'
                    // style={{ backgroundColor: theme.colors.primaryContainer, }}
                />
                <TextInput 
                    label='Mensagem'
                    // style={{ backgroundColor: theme.colors.primaryContainer, }}
                    multiline={true}
                    numberOfLines={9}
                    // placeholder='Escreva seu post aqui...'
                />
                <View style={{ flexDirection: 'row', width: '100%',  justifyContent: 'space-evenly' }}>
                    <Pressable style={ 
                        ({pressed}) => [{
                            backgroundColor: isPrivate ? theme.colors.primary : theme.colors.secondary,
                            opacity: isPrivate ? 1 : 0.5,
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
                            setIsPrivate(true);
                            console.log('private');
                        }}
                    >
                        <Text style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: theme.colors.onPrimary,
                        }}>Privado</Text>
                    </Pressable>
                    <Pressable style={ 
                        ({pressed}) => [{
                            backgroundColor: !isPrivate ? theme.colors.primary : theme.colors.secondary,
                            opacity: !isPrivate ? 1 : 0.5,
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
                            setIsPrivate(false);
                            console.log('public');
                        }}
                    >
                        <Text style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: theme.colors.onPrimary,
                        }}>Público</Text>
                    </Pressable>

                </View>
                <Button mode="contained" style={{ marginTop: 12 }}>
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


