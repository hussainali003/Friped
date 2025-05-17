import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from '../profile/screens/ProfileScreen';
import BottomTabBar from './BottomTabBar';
import HomeScreen from '../home/screens/HomeScreen';
import CategoryScreen from '../category/screens/CategoryScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTabBar" component={BottomTabBar} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
