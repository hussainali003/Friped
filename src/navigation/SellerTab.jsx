import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import UserPinkSvg from '../assets/images/user_alt_pink.svg';
import UserLightSvg from '../assets/images/user_alt_light.svg';
import BasketPinkSvg from '../assets/images/basket_alt_pink.svg';
import SellerBasketSvg from '../assets/images/seller_basket.svg';
import SellerCardSvg from '../assets/images/seller_card.svg';
import SellerCardPinkSvg from '../assets/images/seller_card_pink.svg';
import SellerWidgetSvg from '../assets/images/seller_widget.svg';
import SellerWidgetPinkSvg from '../assets/images/seller_widget_pink.svg';
import SellerShopSvg from '../assets/images/seller_shop.svg';
import SellerShopPinkSvg from '../assets/images/seller_shop_pink.svg';

import * as colors from '../config/colors';

const SellerTab = ({ state, navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.tabBarContainer, {paddingBottom: insets.bottom}]}>
      {state.routes.map((route, index) => {
        const label = route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        if (label === 'DashboardTab') {
          return;
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tabButton]}
          >
            {label === 'Profile' && (
              isFocused ? <UserPinkSvg /> : <UserLightSvg />
            )}
            {label === 'Orders' && (
              isFocused ? <BasketPinkSvg /> : <SellerBasketSvg />
            )}
            {label === 'Dashboard' && (
              isFocused ? <SellerWidgetPinkSvg /> : <SellerWidgetSvg />
            )}
            {label === 'Products' && (
              isFocused ? <SellerShopPinkSvg /> : <SellerShopSvg />
            )}
            {label === 'Wallet' && (
              isFocused ? <SellerCardPinkSvg /> : <SellerCardSvg />
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

export default SellerTab;

