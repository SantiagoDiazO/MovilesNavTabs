import { Text, View, Button } from 'react-native'
import { styles } from '../assets/styles/styles'

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={{fontWeight:'bold', marginBottom:10}}>Estamos en inicio</Text>
            <Button title='Ir al inicio de sesion' onPress={()=>{
                navigation.navigate('Login')
            }}></Button>
        </View>
    )
}