import { Text, View,  StyleSheet } from 'react-native';
import {Link } from 'expo-router';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Yo screen
            </Text>
            <Link href="/about" style={styles.button}>
                Go to About Section</Link>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
    button:{

        fontSize: 20,
        textDecorationLine: 'underline',
        color: 'purple',

    },
});

