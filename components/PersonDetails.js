import * as React from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native';
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
        <ScrollView>
        <Surface style={styles.container} elevation={2}>
            <View style={styles.topRow}>
                <TouchableOpacity onPress={ () => {
                    alert('avatar');
                    console.log(props);
                }
                }>
                    <Avatar.Image 
                        style={styles.avatar}
                        // source={{ uri: props.avatar }}
                        size={60}

                    />
                </TouchableOpacity>


                {/* <View>
                    <Title>{props.name}</Title>
                    <Caption style={styles.handle}>{props.handle}</Caption>
                </View> */}

                <View>
                    <Text>{props.name}</Text>
                </View>

                {/* <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text>Clicks</Text>
                    <Caption>{props.clicks}</Caption>
                
                </View> 
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text>Saldo</Text>
                    <Caption>{props.clicks}</Caption>
                </View>  */}
            </View>

            {/* <Text style={[styles.content, { color: contentColor }]}>
                {props.content}
            </Text>
            <Image 
                source={{ uri: props.image }}
                style={[
                    styles.image,
                    {
                        borderColor: imageBorderColor,
                    },
                ]}
            /> */}
            {/* <View style={styles.bottomRow}>
                <TouchableOpacity onPress={() => {alert('downvote')}}>
                    <View style={styles.iconContainer}>
                        <FontAwesomeIcon size={70} icon={icon({name: 'thumbs-down', style: 'regular'  })} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {alert('upvote')}}>
                    <View style={styles.iconContainer}>
                        <FontAwesomeIcon size={70} icon={icon({name: 'thumbs-up', style: 'regular' })} />
                    </View>
                    </TouchableOpacity>
            </View> */}
        </Surface>
            
        </ScrollView>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        // flexDirection: 'column',
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 20,
    },
    handle: {
        marginRight: 3,
        lineHeight: 12,
        fontWeight: 'bold',
    },
    content: {
        marginTop: 25,
        fontSize: 20,
        lineHeight: 30,

    },
    image: {
        borderWidth: StyleSheet.hairlineWidth,
        marginTop: 25,
        borderRadius: 20,
        width: '100%',
        height: 280,
    },
    bottomRow: { 
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'flex-end'
    },

})


export default React.memo(PersonDetails);