import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import CategoryScreen from '../category/screens/CategoryScreen';
import ProfileScreen from '../profile/screens/ProfileScreen';

import TabBar from './Tab';
import HomeScreen from '../home/screens/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
    tabBar={renderTabBar}
    screenOptions={{headerShown: false}}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const renderTabBar = (props) => <TabBar {...props} />;

export default BottomTab;
