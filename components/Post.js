import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import {
    Surface,
    Title,
    Caption,
    Text,
    Avatar,
    TouchableRipple,
    useTheme,
    } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from 'color';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

import { useNavigation } from '@react-navigation/native';


    // type Props = {
    // id: number;
    // name: string;
    // handle: string;
    // date: string;
    // content: string;
    // image: string;
    // avatar: string;
    // comments: number;
    // retweets: number;
    // hearts: number;
    // onPress: (id: number) => void;
    // };

    export const Post = (props) => {
    const theme = useTheme();

    const navigation = useNavigation();
    // icon({name: 'faThumbsDown', style: 'regular'  });

    const iconColor = color(theme.colors.onSurface)
        .alpha(0.54)
        .rgb()
        .string();

    const contentColor = color(theme.colors.onSurface)
        .alpha(0.8)
        .rgb()
        .string();

    const imageBorderColor = color(theme.colors.onSurface)
        .alpha(0.15)
        .rgb()
        .string();

    return (
        <TouchableRipple onPress={() => { 
            props.onPress(props.id);
        }}>
        <Surface style={styles.container} elevation={1}>
            
            <View style={styles.leftColumn}>
                <TouchableOpacity onPress={() => { 
                        alert(props.handle);
                        console.log(props);
                        // props.onPress('props.id'); 
                        navigation.navigate('Person',  {...props} );
                    }}>
                    <Avatar.Image source={{ uri: props.avatar }} size={60} />
                </TouchableOpacity>
            </View>
            
            <View style={styles.rightColumn}>
                <TouchableOpacity onPress={() => {alert('go to person id page')}}>
                    <View style={styles.topRow}>
                        <Title>{props.name}</Title>
                        <Caption style={styles.handle}>{props.handle}</Caption>
                        <Caption style={[styles.handle, styles.dot]}>{'\u2B24'}</Caption>
                        <Caption>{props.date}</Caption>
                    </View>
                </TouchableOpacity>
                <Text style={{ color: contentColor }}>{props.content}</Text>
                <Image
                    source={{ uri: props.image }}
                    style={[
                    styles.image,
                    {
                        borderColor: imageBorderColor,
                    },
                    ]}
                />
                
                <View style={styles.bottomRow}>
                    {/* <TouchableOpacity */}
                    
                    {/* hitSlop={{ top: 10, bottom: 10 }}
                    > */}
                    <View style={styles.iconContainer}>
                        {/* <MaterialCommunityIcons
                        name="comment-outline"
                        size={12}
                        color={iconColor}
                        /> */}
                        <FontAwesomeIcon icon={icon({name: 'computer-mouse'})} />
                        <Caption style={styles.iconDescription}>
                        {props.comments}
                        </Caption>
                    </View>
                    {/* </TouchableOpacity> */}

                    {/* <TouchableOpacity
                        
                        hitSlop={{ top: 10, bottom: 10 }}
                    > */}
                    <View style={styles.iconContainer}>
                        <FontAwesomeIcon icon={icon({name: 'ranking-star', style: 'solid'})} /> 

                        <Caption style={styles.iconDescription}>
                        {props.retweets}
                        </Caption>
                    </View>
                    {/* </TouchableOpacity> */}

                    <TouchableOpacity
                        onPress={() => {alert('toggle thumbs down')}}
                        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20  }}
                    >
                    <View style={styles.iconContainer}>
                        {/* <MaterialCommunityIcons
                        name="share-outline"
                        size={14}
                        color={iconColor}
                        /> */}

                        {/* <FontAwesomeIcon icon={faThumbsDown} style={styles.thumbsDown}  />   */}
                        {/* <FontAwesomeIcon icon={regular("thumbs-down")} /> */}
                        <FontAwesomeIcon style={styles.icons} icon={icon({name: 'thumbs-down', style: 'regular'})} /> 

                        <Caption style={styles.iconDescription}>
                        {props.retweets}
                        </Caption>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {alert('toggle thumbs up')}}
                    hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                    >
                    <View style={styles.iconContainer}>
                        {/* <MaterialCommunityIcons
                        name="heart-outline"
                        size={12}
                        color={iconColor}
                        /> */}
                        {/* <FontAwesomeIcon icon={faThumbsUp} size={12} color={iconColor} 
                        /> */}
                        <FontAwesomeIcon icon={icon({name: 'thumbs-up', style: 'regular'})} /> 
                        <Caption style={styles.iconDescription}>{props.hearts}</Caption>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Surface>
        </TouchableRipple>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingRight: 15,
    },
    leftColumn: {
        width: 100,
        alignItems: 'center',
    },
    rightColumn: {
        flex: 1,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    handle: {
        marginRight: 3,
    },
    dot: {
        fontSize: 3,
    },
    image: {
        borderWidth: StyleSheet.hairlineWidth,
        marginTop: 10,
        borderRadius: 20,
        width: '100%',
        height: 150,
    },
    bottomRow: {
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    iconContainer: {
            flexDirection: 'row',
            alignItems: 'center',
    },
    iconDescription: {
        marginLeft: 2,
        lineHeight: 30,
    },
    // icons: {
    //     color: 'red',
    // }

});
