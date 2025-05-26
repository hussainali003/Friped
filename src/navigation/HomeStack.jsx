import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DressesScreen from '../buyer/dresses/screens/DressesScreen';
import DressBookScreen from '../buyer/dresses/screens/DressBookScreen';
import DressDetailScreen from '../buyer/dresses/screens/DressDetailScreen';

import OrderPaymentScreen from '../buyer/dressOrder/screens/DressOrderPaymentScreen';
import OrderDetailScreen from '../buyer/dressOrder/screens/DressOrderDetailScreen';
import OrderTrackScreen from '../buyer/dressOrder/screens/DressOrderTrackScreen';

import FaqScreen from '../setting/screens/FaqScreen';
import InboxScreen from '../chat/screens/InboxScreen';
import SettingScreen from '../setting/screens/SettingScreen';
import EditProfileScreen from '../profile/screens/EditProfileScreen';
import RulesAndTermsScreen from '../setting/screens/RulesAndTermsScreen';
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
      <Stack.Screen name="RulesAndTerms" component={RulesAndTermsScreen} />
      <Stack.Screen name="Faq" component={FaqScreen} />
      <Stack.Screen name="Inbox" component={InboxScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Transactions" component={TransactionScreen} />
      <Stack.Screen name="LocationOptions" component={LocationOptionsScreen} />
  </Stack.Navigator>
);

export default HomeStack;
