import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { Avatar } from 'react-native-paper';
import Background from '../components/Background';


const Friends = () => {

    //dummy data
    const data = [
        {
            id: 1,
            name: '🌈 Evelyn',
            handle: '@Ev22u',
            avatar:
            'https://i.pravatar.cc/100?u=john',
        },
        {
            id: 2,
            name: 'Sayajin kakaroto',
            handle: '@sataaa1',
            avatar:
            'https://i.pravatar.cc/150?u=test',
        },
        {
            id: 3,
            name: 'Elvis',
            handle: '@elvin_not_11',
            avatar:
            'https://i.pravatar.cc/100?u=elvis',
        },
        {
            id: 4,
            name: '🌈 Joshua',
            handle: '@JoshWComeau',
            avatar:
            'https://i.pravatar.cc/100?u=kaka',
        },
        {
            id: 5,
            name: 'Joao alberto',
            handle: '@satya164',
            avatar:
            'https://i.pravatar.cc/100?u=jao',
        },

        
    ]

    // function renderItem({ item }) {
    //     return (
    //         <View style={styles.item}>

    //         </View>
    //     )
    // }

    const Item = (props) => (
        <View style={styles.item}>
            {/* <Text style={styles.title}>{props.name}</Text> */}
            <Text> {props.handle}</Text>
            <Avatar.Image style={styles.avatars} source={{ uri: props.avatar }} size={60} />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList 
            
                data={data}
                renderItem={({item}) => <Item {...item} />}
                keyExtractor={item => item.id}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'inline',
        padding: 8,
        borderRadius: 4,
        margin: 8,
    },
    avatars: {
        marginRight: 8,


    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 4,
    },
    
});

export default React.memo(Friends);
