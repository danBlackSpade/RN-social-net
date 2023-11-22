import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native';
import { Post } from '../components/Post';

import { useTheme } from 'react-native-paper';


//data

const posts = [
    {
    id: 1,
    name: '🌈 Josh',
    handle: '@JoshWComeau',
    date: '10h',
    content:
    '🔥 Automatically use "smart" directional curly quotes with the `quotes` CSS property! Even handles nested quotes with the <q> tag :o',
    image: 'https://pbs.twimg.com/media/EOUrCOcWAAA71rA?format=png&name=small',
    avatar:
    'https://pbs.twimg.com/profile_images/1242807739681845248/HeUb7BAt_400x400.jpg',
    comments: 12,
    retweets: 36,
    hearts: 175,
},
{
    id: 2,
    name: 'Satyajit Sahoo',
    handle: '@satya164',
    date: '20h',
    content:
    'Not sure if I should be proud or ashamed of this piece of art 😅\n\n#Typescript',
    image: 'https://pbs.twimg.com/media/EONH4KWX4AEV-JP?format=jpg&name=medium',
    avatar:
    'https://pbs.twimg.com/profile_images/1203032057875771393/x0nVAZPL_400x400.jpg',
    comments: 64,
    retweets: 87,
    hearts: 400,
},
{
    id: 3,
    name: 'Elvin',
    handle: '@elvin_not_11',
    date: '14h',
    content:
    'Hid the home indicator from the app so the device resembles an actual iPod even more. Thanks @flipeesposito for the suggestion!',
    image:
    'https://static.antyweb.pl/uploads/2014/09/IPod_classic_6G_80GB_packaging-2007-09-22-1420x670.jpg',
    avatar:
    'https://pbs.twimg.com/profile_images/1274435026482937858/JZmznbJO_400x400.jpg',
    comments: 23,
    retweets: 21,
    hearts: 300,
},
{
    id: 4,
    name: '🌈 Josh',
    handle: '@JoshWComeau',
    date: '10h',
    content:
    '🔥 Automatically use "smart" directional curly quotes with the `quotes` CSS property! Even handles nested quotes with the <q> tag :o',
    image: 'https://pbs.twimg.com/media/EOUrCOcWAAA71rA?format=png&name=small',
    avatar:
    'https://pbs.twimg.com/profile_images/1242807739681845248/HeUb7BAt_400x400.jpg',
    comments: 12,
    retweets: 36,
    hearts: 175,
},
{
    id: 5,
    name: 'Satyajit Sahoo',
    handle: '@satya164',
    date: '20h',
    content:
    'Not sure if I should be proud or ashamed of this piece of art 😅\n\n#Typescript',
    image: 'https://pbs.twimg.com/media/EONH4KWX4AEV-JP?format=jpg&name=medium',
    avatar:
    'https://pbs.twimg.com/profile_images/1203032057875771393/x0nVAZPL_400x400.jpg',
    comments: 64,
    retweets: 87,
    hearts: 400,
},
{
    id: 6,
    name: 'Elvin',
    handle: '@elvin_not_11',
    date: '14h',
    content:
    'Hid the home indicator from the app so the device resembles an actual iPod even more. Thanks @flipeesposito for the suggestion!',
    image:
    'https://static.antyweb.pl/uploads/2014/09/IPod_classic_6G_80GB_packaging-2007-09-22-1420x670.jpg',
    avatar:
    'https://pbs.twimg.com/profile_images/1274435026482937858/JZmznbJO_400x400.jpg',
    comments: 23,
    retweets: 21,
    hearts: 300,
},
];

function renderItem({ item }) {
    return <Post {...item} />
}

function keyExtractor(item) {
    return item.id.toString();
}


export const Feed = (props) => {
    const theme = useTheme();

    const data = posts.map(postProps => ({
        ...postProps,
        onPress: () => {
            props.navigation &&
            props.navigation.push('Details', { ...postProps })
        }
    }))

    return (
        <FlatList
            contentContainerStyle={{ backgroundColor: theme.colors.background }}
            style={{ backgroundColor: theme.colors.background }}
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={() => (
                <View style={{ height: StyleSheet.hairlineWidth }}/>
            )}
        />
        
    )
}