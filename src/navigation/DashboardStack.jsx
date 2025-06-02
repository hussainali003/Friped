import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddNewProductScreen from '../seller/addNewProduct/screens/AddNewProductScreen';

const Stack = createNativeStackNavigator();

const DashboardStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="AddNewProduct" component={AddNewProductScreen} />
  </Stack.Navigator>
);

export default DashboardStack;
