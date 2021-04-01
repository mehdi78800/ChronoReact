import React from 'react';
import { Text } from 'react-native';

const Chrono = ({ h, s ,m }) => {

    return(
        <Text>{h}h {m}m {s}s</Text>
    )
}

export default Chrono;