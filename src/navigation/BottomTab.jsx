import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../home/screens/HomeScreen';
import OrderScreen from '../order/screens/OrderScreen';
import ProfileScreen from '../profile/screens/ProfileScreen';
import CategoryScreen from '../category/screens/CategoryScreen';

import HomeStack from './HomeStack';

import TabBar from './Tab';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
    tabBar={renderTabBar}
    screenOptions={{headerShown: false}}
    >
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const renderTabBar = (props) => <TabBar {...props} />;

export default BottomTab;
