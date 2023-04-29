//Librerias para el manejo de la navegacion entre pantallas
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeTabs from './screens/HomeTabs'
import LoginScreen from './screens/Login'

const Stack = createNativeStackNavigator() //Definir las rutas de cada componente


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

      <Stack.Screen name="HomeTabs" component={HomeTabs} options={{title:'Sistema Demo'}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{title:'Inicio de sesion'}} />
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{title:'Inicio'}} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title:'Perfil del Usuario'}} />
        <Stack.Screen name="Contacts" component={Contacts} options={{title:'Contacto'}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}