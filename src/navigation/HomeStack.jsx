import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DressesScreen from '../dresses/screens/DressesScreen';
import DressBookScreen from '../dresses/screens/DressBookScreen';
import DressDetailScreen from '../dresses/screens/DressDetailScreen';

import OrderPaymentScreen from '../order/screens/OrderPaymentScreen';
import OrderDetailScreen from '../order/screens/OrderDetailScreen';
import OrderTrackScreen from '../order/screens/OrderTrackScreen';

import SettingScreen from '../setting/screens/SettingScreen';
import EditProfileScreen from '../profile/screens/EditProfileScreen';
import TransactionScreen from '../transactions/screens/TransactionsScreen';
import LocationOptionsScreen from '../location/screens/LocationOptionsScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="Dresses" component={DressesScreen} />
      <Stack.Screen name="DressBook" component={DressBookScreen} />
      <Stack.Screen name="DressDetail" component={DressDetailScreen} />
      <Stack.Screen name="OrderTrack" component={OrderTrackScreen} />
      <Stack.Screen name="OrderDetail" component={OrderDetailScreen} />
      <Stack.Screen name="OrderPayment" component={OrderPaymentScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Transactions" component={TransactionScreen} />
      <Stack.Screen name="LocationOptions" component={LocationOptionsScreen} />
  </Stack.Navigator>
);

export default HomeStack;
