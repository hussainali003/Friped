import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DressesScreen from '../dresses/screen/DressesScreen';
import OrderPaymentScreen from '../order/screens/OrderPaymentScreen';
import DressBookScreen from '../dresses/screen/DressBookScreen';
import OrderDetailScreen from '../order/screens/OrderDetailScreen';
import DressDetailScreen from '../dresses/screen/DressDetailScreen';
import OrderTrackScreen from '../order/screens/OrderTrackScreen';
import EditProfileScreen from '../profile/screens/EditProfileScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="Dresses" component={DressesScreen} />
      <Stack.Screen name="DressBook" component={DressBookScreen} />
      <Stack.Screen name="DressDetail" component={DressDetailScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="OrderTrack" component={OrderTrackScreen} />
      <Stack.Screen name="OrderDetail" component={OrderDetailScreen} />
      <Stack.Screen name="OrderPayment" component={OrderPaymentScreen} />
  </Stack.Navigator>
);

export default HomeStack;
