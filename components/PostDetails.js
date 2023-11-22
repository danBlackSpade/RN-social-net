import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
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


export const PostDetails = (props) => {
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
        <Surface style={styles.container}>
            <View style={styles.topRow}>
                <Avatar.Image 
                    style={styles.avatar}
                    source={{ uri: props.avatar }}
                    size={60}
                />
                <View>
                    <Title>{props.name}</Title>
                    <Caption style={styles.handle}>{props.handle}</Caption>
                </View>
            </View>
            <Text style={[styles.content, { color: contentColor }]}>
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
            />
        </Surface>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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
    }
})