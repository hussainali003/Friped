import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DressesScreen from '../dresses/screen/DressesScreen';


const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dresses" component={DressesScreen} />
  </Stack.Navigator>
);

export default HomeStack;
