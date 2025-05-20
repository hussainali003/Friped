import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DressesScreen from '../dresses/screen/DressesScreen';
import DressDetailScreen from '../dresses/screen/DressDetailScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="Dresses" component={DressesScreen} />
      <Stack.Screen name="DressDetail" component={DressDetailScreen} />
  </Stack.Navigator>
);

export default HomeStack;
