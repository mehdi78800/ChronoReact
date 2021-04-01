import React from 'react';
import Styles from '../Styles/styles'
import { TouchableOpacity, View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { resetSaves } from '../actions/actions-types';

const HomeScreen = ({ navigation }) => {
    const { times } = useSelector(state => state.chrono);
    const dispatch = useDispatch();

    return (
        <View style={[Styles.home, Styles.center]}>



            <View>
                {times.length == 0 && (
                    <View style={[Styles.center]}>
                        <Text style={[Styles.title]}>Commencez par enregistrer un temps</Text>
                    </View>
                )}

                {times.length > 0 && (
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity
                            style={[Styles.btn, Styles.stop]}
                            onPress={() => dispatch(resetSaves())}
                        >
                            <Text
                                style={Styles.txt}
                            >Reset</Text>
                        </TouchableOpacity>
                        <Text style={[Styles.title]}>Liste des temps enregistrés :</Text>
                    </View>
                )}


                <FlatList
                    data={times}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <Text style={[Styles.times]}>{index + 1}. chrono: {item}</Text>
                        )
                    }}

                />
            </View>
        </View>

    );
}




export default HomeScreen;
