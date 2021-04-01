import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../Styles/styles';

const Chrono = ({ h, s, m }) => {

    return (
        <View style={[Styles.chronoContainer]}>
            <Text style={[Styles.chrono]}>
                {h}h {m}m {s}s
            </Text>
        </View>
    )
}

export default Chrono;