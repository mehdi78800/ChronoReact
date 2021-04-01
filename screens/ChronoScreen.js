import React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector, useEffect } from 'react-redux';
import { launchChrono, startChrono, stopChrono, resetChrono, saveChrono } from '../actions/actions-types';
import Chrono from "../components/Chrono";

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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <View style={{ flexDirection: 'row' }}>

                <Button
                    title="Start"
                    onPress={() => dispatch(launchChrono())}
                />

                <Button
                    title="Stop"
                    onPress={() => dispatch(stopChrono())}
                />

                <Button
                    title="Reset"
                    onPress={() => dispatch(resetChrono())}
                />

                <Button
                    title="Save"
                    onPress={() => dispatch(saveChrono())}
                />

            </View>

            <Chrono
                h={h}
                m={m}
                s={s}
            />
        </View>
    );
}

export default ChronoScreen;