import React from 'react';
import Main from './src/Main'
import PetInfo from './src/AboutPet'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();
const App = () => {
  return (
  <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
            <Stack.Screen
            name='Main'
            component={Main}
            />
            <Stack.Screen
            name='About'
            component={PetInfo}
            options={{title: 'О животном'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;