import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native';
import { Post } from '../components/Post';

import { useTheme } from 'react-native-paper';


//data

const posts = [
    {
    id: 1,
    name: '🌈 Evelyn',
    handle: '@Ev22u',
    date: '10h',
    content:
    '🔥 ALorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lacus orci. Donec sed eros dignissim, aliquet sem sit amet, ultrices tellus. Nullam et lacus odio. Etiam blandit dui est, ut dignissim orci posuere et. Duis ac massa vel nunc vulputate convallis. Nunc quis enim in libero efficitur imperdiet. Praesent lacinia vulputate dignissim. Duis non nisi a lectus gravida mollis egestas ac nunc. In gravida nisi congue condimentum tristique. Suspendisse lectus neque, euismod a iaculis eget, sollicitudin ac tortor.u',
    image: 'https://pbs.twimg.com/media/EOUrCOcWAAA71rA?format=png&name=small',
    avatar:
    'https://pbs.twimg.com/profile_images/1242807739681845248/HeUb7BAt_400x400.jpg',
    comments: 12,
    retweets: 36,
    hearts: 175,
},
{
    id: 2,
    name: 'Sayajin kakaroto',
    handle: '@satya164',
    date: '20h',
    content:
    'In feugiat ornare erat vitae ullamcorper. Maecenas ornare sodales ornare. Aliquam sed fringilla dolor, a tempor sem. Suspendisse ornare lacus auctor velit condimentum, ac dignissim tellus hendrerit. Ut rutrum dictum condimentum. Aliquam felis nisl, laoreet eget felis a, lobortis dapibus erat. Duis eget libero augue. Nulla in ante urna. Donec mollis odio nec neque varius, vel volutpat velit volutpat. Pellentesque suscipit eleifend urna ut interdum. Mauris fermentum nisi id tellus tempus pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vehicula metus ac enim condimentum posuere. Quisque vel odio vitae quam porta viverra. Nullam neque est, aliquam sit amet est blandit, posuere fermentum sapien. Nunc sit amet maximus magna, id elementum augue. Suspendisse tincidunt, diam in sagittis interdum, odio ex bibendum neque, ut ultrices lectus leo sit amet augue. Aliquam vulputate luctus molestie. Praesent placerat fringilla ante, nec mollis nisi pulvinar nec. In sed felis quis justo volutpat vestibulum. Morbi tortor orci, dapibus in dolor vestibulum, lobortis luctus leo. Donec et diam velit. Ut sed felis rhoncus, ornare nisl condimentum, posuere purus. Vivamus ornare nunc sit amet magna porttitor, at tempor ante.',
    image: 'https://pbs.twimg.com/media/EONH4KWX4AEV-JP?format=jpg&name=medium',
    avatar:
    'https://pbs.twimg.com/profile_images/1203032057875771393/x0nVAZPL_400x400.jpg',
    comments: 64,
    retweets: 87,
    hearts: 400,
},
{
    id: 3,
    name: 'Elvis',
    handle: '@elvin_not_11',
    date: '14h',
    content:
    'Integer porttitor tempor lacus, eu hendrerit justo rhoncus id. Morbi ut felis at mi sollicitudin sollicitudin. Nulla facilisi. Nunc vestibulum libero pellentesque dapibus placerat. Cras consequat ex nec erat varius, nec molestie augue interdum. Nullam eros ipsum, varius id viverra ut, ultrices sit amet ante. Quisque eget dolor laoreet, vulputate massa laoreet, convallis justo. Ut rutrum libero purus, id tristique turpis imperdiet eu. Aenean eget lectus non urna volutpat blandit si',
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
    name: '🌈 Joshua',
    handle: '@JoshWComeau',
    date: '10h',
    content:
    'Fusce eget molestie ante. Maecenas dui ligula, dapibus sed est mollis, sodales imperdiet nulla. Curabitur nec ullamcorper ex. Quisque mollis ac magna non pellentesque. Donec gravida velit non ultricies sodales. Donec ac ex magna. Nulla pellentesque quam eget urna auctor semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ipsum sem, porttitor non metus at, auctor condimentum tortor. Maecenas in justo tortor. Quisque pulvinar lorem nec pharetra vulputate. Aliquam in turpis vulputate, venenatis massa at, aliquam metus. Aliquam at sagittis elit. Aliquam rutrum magna ac nulla commodo porta. In ac ligula in tortor volutpat tristique eleifend id purus. Nulla lacus dui, molestie non felis nec, vulputate efficitur ligula. Quisque consectetur quis mi vitae maximus. Aliquam vitae nisi ut dui porta posuere. Quisque id gravida eros. Morbi at elit dignissim, commodo neque mollis, iaculis tortor. Nullam convallis eu metus ut laoreet. Morbi eget elit quis magna dapibus congue. Suspendisse sapien dui, auctor a felis ac, pulvinar porta nibh.',
    image: 'https://pbs.twimg.com/media/EOUrCOcWAAA71rA?format=png&name=small',
    avatar:
    'https://pbs.twimg.com/profile_images/1242807739681845248/HeUb7BAt_400x400.jpg',
    comments: 12,
    retweets: 36,
    hearts: 175,
},
{
    id: 5,
    name: 'Joao alberto',
    handle: '@satya164',
    date: '20h',
    content:
    'Nullam vel nisi non justo congue rhoncus vitae a neque. Cras finibus augue at dui commodo, nec porttitor lectus semper. Aliquam porttitor, leo ut condimentum sagittis, quam leo vehicula ante, a scelerisque.',
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
    'Nullam vel nisi non justo congue rhoncus vitae a neque. Cras finibus augue at dui commodo, nec porttitor lectus semper. Aliquam porttitor, leo ut condimentum sagittis, quam leo vehicula ante, a scelerisque.',
    // image:
    // 'https://static.antyweb.pl/uploads/2014/09/IPod_classic_6G_80GB_packaging-2007-09-22-1420x670.jpg',
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