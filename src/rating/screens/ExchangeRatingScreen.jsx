import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Header } from '../../common';

import OrderDetail from '../components/OrderDetail';
import LeaveRatingSection from '../sections/exchangeRating/LeaveRatingSection';

import * as colors from '../../config/colors';
import OrderCompleteSection from '../sections/exchangeRating/OrderCompleteSectioni';

const ExchangeRatingScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <Header title="Exchange Rating"/>
            <ScrollView contentContainerStyle={styles.scrollViewContentContainer} style={styles.scrollViewContainer}>
                <LeaveRatingSection />
                <OrderDetail />
                <OrderCompleteSection />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
    scrollViewContainer: {
        backgroundColor: colors.background_one,
    },
    scrollViewContentContainer: {
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
});

export default ExchangeRatingScreen;
