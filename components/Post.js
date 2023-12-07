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

    // TODO: limit max number of caption ie: 10k+, 100k+. 1m+, etc
    
    export const Post = (props) => {
    const theme = useTheme();

    const navigation = useNavigation();
    const [isUpvoted, setIsUpvoted] = React.useState(null);
    const [iconStyle, setIconStyle] = React.useState(null);

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
                        // alert(props.handle);
                        console.log(props);
                        // props.onPress('props.id'); 
                        navigation.navigate('Person',  props );
                    }}>
                    <Avatar.Image source={{ uri: props.avatar }} size={60} />
                </TouchableOpacity>
            </View>
            
            <View style={styles.rightColumn}>
                <TouchableOpacity onPress={() => {navigation.navigate('Person',  props )}}>
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
                    <View style={styles.iconContainer}>
                        {/* <FontAwesomeIcon style={styles.icon(theme)} icon={icon({name: 'ranking-star', style: 'solid'})} />  */}
                        <FontAwesomeIcon icon={['fas', "ranking-star"]} size={30} style={styles.icon(theme)}/> 
                        <Caption style={styles.iconDescription}>
                        555
                        </Caption>
                    </View>

                    <TouchableOpacity
                        onPress={() => {isUpvoted === false ? setIsUpvoted(null) : setIsUpvoted(false); console.log(isUpvoted); }}
                        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20  }}
                    >
                    <View style={styles.iconContainer}>
                        {/* <FontAwesomeIcon size={30}  style={styles.icon(theme)} icon={icon({ name: 'thumbs-down', style: 'regular' })} />  */}
                        <FontAwesomeIcon 
                            icon={[isUpvoted === null ? 'far' : isUpvoted ? 'far' : 'fas', "thumbs-down" ]}  
                            
                            style={styles.icon(theme)} 
                            size={30}
                        />

                        <Caption style={styles.iconDescription}>
                        {props.retweets} 
                        1235
                        </Caption>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => { isUpvoted === true ? setIsUpvoted(null) : setIsUpvoted(true) }}
                    hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                    >
                    <View style={styles.iconContainer}>

                        {/* <FontAwesomeIcon size={30} style={styles.icon(theme)} icon={icon({name: 'thumbs-up', style: 'regular'})} />  */}
                        <FontAwesomeIcon icon={[
                            isUpvoted === null ? 'far' : isUpvoted ? 'fas' : 'far'
                            , "thumbs-up" ]}  border  style={styles.icon(theme)} size={30} />

                        <Caption style={styles.iconDescription}>{props.hearts}
                        12312
                        </Caption>
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
            // flexDirection: 'row',
            alignItems: 'center',
    },
    iconDescription: {
        marginLeft: 2,
        lineHeight: 30,
    },
    icons: (theme) => ({
        // fontColor: theme.colors.onBackground,
    }),
    icon: (theme) => ({
        color: theme.colors.secondary,
    })

});
