import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from '../profile/screens/ProfileScreen';

import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

const renderTabBar = (props) => <TabBar {...props} />;

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{headerShown: false}}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
