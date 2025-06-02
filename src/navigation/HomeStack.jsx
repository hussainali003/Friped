import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DressesScreen from '../buyer/dresses/screens/DressesScreen';
import DressBookScreen from '../buyer/dresses/screens/DressBookScreen';
import DressDetailScreen from '../buyer/dresses/screens/DressDetailScreen';

import OrderPaymentScreen from '../buyer/dressOrder/screens/DressOrderPaymentScreen';
import OrderDetailScreen from '../buyer/dressOrder/screens/DressOrderDetailScreen';
import OrderTrackScreen from '../buyer/dressOrder/screens/DressOrderTrackScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="Dresses" component={DressesScreen} />
      <Stack.Screen name="DressBook" component={DressBookScreen} />
      <Stack.Screen name="OrderTrack" component={OrderTrackScreen} />
      <Stack.Screen name="DressDetail" component={DressDetailScreen} />
      <Stack.Screen name="OrderDetail" component={OrderDetailScreen} />
      <Stack.Screen name="OrderPayment" component={OrderPaymentScreen} />
  </Stack.Navigator>
);

export default HomeStack;
