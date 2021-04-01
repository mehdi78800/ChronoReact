import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';


const HomeScreen = ({ navigation }) => {
    const { times } = useSelector(state => state.chrono);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text>Liste des chronos enregistrés ici :</Text>
            <Button
                title="Reset"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Chrono"
                onPress={() => navigation.navigate('Chrono')}
            />
            <FlatList
                data={times}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                    return(
                        <Text>{index+1}. chrono: {item}</Text>
                    )
                }}

            />
        </View>
    );
}

export default HomeScreen;
