import * as React from 'react';

import { View, Text } from 'react-native';
import PersonDetails from '../components/PersonDetails';


const Person = (props) => {
    
        return (
            <PersonDetails {...props.route.params}/>
            // <View>
            //     <Text>Person</Text>
            //     <Text>{props.route.params.handle}</Text>
            //     <Text>{props.route.params.avatar}</Text>
            // </View>
        )
};

export default React.memo(Person);
