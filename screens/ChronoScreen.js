import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { launchChrono, startChrono, stopChrono, resetChrono, saveChrono } from '../actions/actions-types';
import Chrono from "../components/Chrono";
import Styles from '../Styles/styles';

const ChronoScreen = () => {

    let interval = null;
    const TIME_COUNTER = 1000;

    const dispatch = useDispatch();
    const { h, m, s, statut } = useSelector(state => state.chrono);

    React.useEffect(() => {
        if (statut) {
            clearInterval(interval);
        }

        interval = setInterval(() => {
            dispatch(startChrono());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [statut]);


    return (
        <View style={[Styles.home, Styles.center]}>
            
            <Chrono
                h={h}
                m={m}
                s={s}
            />
            
            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity
                    style={[Styles.btn, Styles.start]}
                    onPress={() => dispatch(launchChrono())}
                >
                    <Text
                        style={Styles.txt}>
                        Start
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[Styles.btn, Styles.stop]}
                    onPress={() => dispatch(stopChrono())}
                >
                    <Text
                        style={Styles.txt}>
                        Stop
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[Styles.btn, Styles.stop]}
                    onPress={() => dispatch(resetChrono())}
                >
                    <Text
                        style={Styles.txt}>
                        Reset
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[Styles.btn, Styles.start]}
                    onPress={() => dispatch(saveChrono())}
                >
                    <Text
                        style={Styles.txt}>
                        Save
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}



export default ChronoScreen;