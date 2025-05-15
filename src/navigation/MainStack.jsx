import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from '../profile/screens/ProfileScreen';
import BottomTabBar from './BottomTabBar';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTabBar" component={BottomTabBar} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
