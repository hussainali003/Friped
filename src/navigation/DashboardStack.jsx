import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InboxScreen from '../chat/screens/InboxScreen';
import SettingScreen from '../setting/screens/SettingScreen';
import EditProfileScreen from '../profile/screens/EditProfileScreen';
import TransactionScreen from '../transactions/screens/TransactionsScreen';
import LocationOptionsScreen from '../location/screens/LocationOptionsScreen';

import FaqScreen from '../setting/screens/FaqScreen';
import RulesAndTermsScreen from '../setting/screens/RulesAndTermsScreen';

import AddNewProductScreen from '../seller/addNewProduct/screens/AddNewProductScreen';

const Stack = createNativeStackNavigator();

const DashboardStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="c" component={AddNewProductScreen} />
      <Stack.Screen name="Inbox" component={InboxScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Transactions" component={TransactionScreen} />
      <Stack.Screen name="LocationOptions" component={LocationOptionsScreen} />
      <Stack.Screen name="Faq" component={FaqScreen} />
      <Stack.Screen name="RulesAndTerms" component={RulesAndTermsScreen} />
  </Stack.Navigator>
);

export default DashboardStack;
