import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from '../profile/screens/ProfileScreen';

import TabBar from './TabBar';
import HomeScreen from '../home/screens/HomeScreen';
import CategoryScreen from '../category/screens/CategoryScreen';

const Tab = createBottomTabNavigator();

const renderTabBar = (props) => <TabBar {...props} />;

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{headerShown: false}}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
