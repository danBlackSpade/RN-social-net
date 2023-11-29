import * as React from 'react';


import { View, Text } from 'react-native';


import Background from '../components/Background';


const Likes = () => {

    return(
        <Background>
            <Text>Likes</Text>
        </Background>
    )
};

export default React.memo(Likes);