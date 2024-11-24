import {View, StyleSheet, Button} from 'react-native';
import {Link ,Stack} from 'expo-router';

export default function NotFoundScreen(){

    return (
        <>
<Stack.Screen options={{title:"OOPS NOT FOUND"}}/>
        <View style={styles.container}>
        <Link href="/" style={styles.button}>
        Go back to  HOME SCREEN
        </Link>
        </View>
        </>

    );

}
const styles =StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
   button:{

        fontSize:20,
        textDecorationLine: 'underline',
        color: 'green',
    },

})

