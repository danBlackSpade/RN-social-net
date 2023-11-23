import * as React from 'react';
import { Text } from 'react-native'
import { PostDetails } from '../components/PostDetails';

export const Details = (props) => {
    return (
        <PostDetails {...props.route.params}/>
    )
};