import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({

    center:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
    },

    home:{
        backgroundColor: "#333",
    },

    btn: {
        color: "blue",
        margin: 14,
        padding: 10,
        width: 80,
        alignItems: "center",
        borderRadius: 10,

    },

    stop: {
        backgroundColor: "palevioletred",
    },

    start: {
        backgroundColor: "#5DE3B0",
    },

    txt: {
        fontSize: 18,
        color: "white"
    },

    title: {
        fontSize: 18,
        color: "tomato"
    },

    times: {
        fontSize: 16,
        color: "white"
    },

    chrono: {
        fontSize: 40,
        color: "grey",
    },

    chronoContainer: {
        alignItems: 'center', 
        justifyContent: 'center',
        height: 330,
        width: 330,
        maxWidth: 345,
        borderRadius: 200,
        backgroundColor: "white",
        borderWidth: 7,
        borderColor: "grey",
    },
});

export default styles;