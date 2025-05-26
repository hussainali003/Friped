import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from './SellerTab';

import DashboardStack from './DashboardStack';

import ProfileScreen from '../profile/screens/ProfileScreen';

import OrdersScreen from '../seller/orders/screens/OrdersScreen';
import WalletScreen from '../seller/wallet/screens/WalletScreen';
import ProductsScreen from '../seller/products/screens/ProductsScreen';
import DashboardScreen from '../seller/dashboard/screens/DashboardScreen';

const Tab = createBottomTabNavigator();

const SellerBottomTab = () => {
  return (
    <Tab.Navigator
    tabBar={renderTabBar}
    screenOptions={{headerShown: false}}
    >
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="DashboardTab" component={DashboardStack} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const renderTabBar = (props) => <TabBar {...props} />;

export default SellerBottomTab;
