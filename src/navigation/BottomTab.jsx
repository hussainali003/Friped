import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from '../profile/screens/ProfileScreen';

import HomeScreen from '../buyer/home/screens/HomeScreen';
import CategoryScreen from '../buyer/category/screens/CategoryScreen';
import DressesOrderScreen from '../buyer/dressOrder/screens/DressesOrderScreen';
import FavouritesScreen from '../buyer/favourites/screens/FavouritesScreen';

import HomeStack from './HomeStack';

import TabBar from './Tab';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
    tabBar={renderTabBar}
    screenOptions={{headerShown: false}}
    >
      <Tab.Screen name="Order" component={DressesOrderScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const renderTabBar = (props) => <TabBar {...props} />;

export default BottomTab;
