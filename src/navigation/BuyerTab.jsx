import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HomeLightSvg from '../assets/images/home_light.svg';
import HomePinkSvg from '../assets/images/home_pink.svg';
import HeartLightSvg from '../assets/images/heart_light.svg';
import HeartPinkSvg from '../assets/images/heart_pink.svg';
import WidgetLightSvg from '../assets/images/widget_light.svg';
import WidgetPinkSvg from '../assets/images/widget_pink.svg';
import UserLightSvg from '../assets/images/user_alt_light.svg';
import UserPinkSvg from '../assets/images/user_alt_pink.svg';
import BasketLightSvg from '../assets/images/basket_alt_light.svg';
import BasketPinkSvg from '../assets/images/basket_alt_pink.svg';


import * as colors from '../config/colors';

const  BuyerTab = ({ state, navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.tabBarContainer, {paddingBottom: insets.bottom}]}>
      {state.routes.map((route, index) => {
        const label = route.name; // simple label
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        if (label === 'HomeTab') {
          return;
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tabButton]}
          >
            {label === 'Home' && (
              isFocused ? <HomePinkSvg /> : <HomeLightSvg />
            )}
            {label === 'Profile' && (
              isFocused ? <UserPinkSvg /> : <UserLightSvg />
            )}
            {label === 'Category' && (
              isFocused ? <WidgetPinkSvg /> : <WidgetLightSvg />
            )}
            {label === 'Order' && (
              isFocused ? <BasketPinkSvg /> : <BasketLightSvg />
            )}
            {label === 'Favourites' && (
              isFocused ? <HeartPinkSvg /> : <HeartLightSvg />
            )}
            <Text style={[styles.text, { color: isFocused ? colors.dashLine : colors.text_primary }]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: colors.background_one,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    rowGap: 4,
    paddingVertical: 8,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
  },
});

export default BuyerTab;

