import * as React from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import {
    Surface,
    Title,
    Caption,
    Avatar,
    Subheading,
    useTheme,
    Text
} from 'react-native-paper';
import color from 'color';
import Button from './Button';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const PersonDetails = (props) => {
    const theme = useTheme();

    const contentColor = color(theme.colors.onSurface)
        .alpha(0.8)
        .rgb()
        .string();
    
    const imageBorderColor = color(theme.colors.onSurface)
        .alpha(0.15)
        .rgb()
        .string();

    return (
        // <ScrollView >
        <Surface style={styles.container} elevation={4}>
            <View style={styles.topRow}>
                <TouchableOpacity onPress={ () => {
                    alert('avatar');
                    console.log(props);
                }
                }>
                    <Avatar.Image 
                        style={styles.avatar}
                        source={{ uri: props.avatar }}
                        size={100}

                    />
                </TouchableOpacity>


                <View>
                    <Title>{props.name}</Title>
                    {/* <Caption style={styles.handle}>{props.handle}</Caption> */}
                </View>

                <View style={{ marginVertical:10 }}>
                    <Text>{props.handle}</Text>
                </View>

                <View>
                <Text style={styles.title}>Clicks</Text>
                    <Caption style={styles.caption}>{props.clicks}</Caption>
                
                </View> 
                <View >
                <Text style={styles.title}>Saldo</Text>
                    <Caption style={styles.caption}>{props.clicks}</Caption>
                </View> 
            </View>
            <View style={styles.bottomRow}>
                <Pressable 
                    style={styles.button(theme)}
                    onPress={() => {
                        alert('add friend ' + props.handle);
                        console.log(props.handle);
                    }}
                >
                    <Text style={styles.txtButton(theme)}>Adicionar</Text>
                </Pressable>
            
            

            </View>
        </Surface>
            
        // </ScrollView>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    // myTheme: (theme) => ({ 
    //     backgroundColor: theme.colors.primary,
    //     borderRadius: 10,
    // }),
    topRow: {
        // flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        // marginRight: 20,
    },
    handle: {
        // marginRight: 3,
        lineHeight: 12,
        fontWeight: 'bold',
    },

    // image: {
    //     borderWidth: StyleSheet.hairlineWidth,
    //     marginTop: 25,
    //     borderRadius: 20,
    //     width: '100%',
    //     height: 280,
    // },
    bottomRow: { 
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    iconContainer: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'flex-end'
    },
    caption: {
        fontSize: 14,
        lineHeight: 20,
        alignSelf: 'center',
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
    },
    button: (theme) => ({
        backgroundColor: theme.colors.primary,
        borderRadius: 20,
        width: '60%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        // alignContent: 'center'
        
    }),
    txtButton: (theme) => ({
        color: theme.colors.onPrimary,
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        
    }),
})


export default React.memo(PersonDetails);