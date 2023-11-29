import * as React from 'react';

import { View, Text } from 'react-native';
import Background from '../components/Background';


const Notifications = () => { 
    
        return(
            <Background>
                <Text>Notifications</Text>
            </Background>
        )
};

export default React.memo(Notifications);