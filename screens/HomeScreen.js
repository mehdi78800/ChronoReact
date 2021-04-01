import React from 'react';
import { Button, View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
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
        </View>
    );
}

export default HomeScreen;
