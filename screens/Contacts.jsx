import { Text, View, Button } from 'react-native'
import { styles } from "../assets/styles/styles"

export default function Contacts(route){
    return(
      <View style={styles.container}>
        <Text style={{fontWeight:'bold'}}>Estamos en contactos</Text>
      </View>
    )
  }