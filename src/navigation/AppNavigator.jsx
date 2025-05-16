import { NavigationContainer } from '@react-navigation/native';

import MainStack from './MainStack';
import AuthStack from './AuthStack';


const AppNavigator = () => {
    const isLogin = true;

    return (
      <NavigationContainer>
            {isLogin ? (
                <MainStack />
            ) : (
                <AuthStack />
            )}
      </NavigationContainer>
    );
};

export default AppNavigator;
