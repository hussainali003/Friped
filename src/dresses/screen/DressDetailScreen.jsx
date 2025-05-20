import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DeliveryInfoSection, Header } from '../../common';

import SellerSection from '../section/dressDetail/SellerSection';
import DressDetailList from '../section/dressDetail/dressDetailList';
import CarouselSection from '../section/dressDetail/CarouselSection';
import DescriptionSection from '../section/dressDetail/DescriptionSection';

import data from '../../static/DressDetail';

import * as colors from '../../config/colors';

const DressDetailScreen = ({name = 'Priya'}) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Dresses Details" />
            <ScrollView contentContainerStyle={styles.scrollViewContentContainer} style={styles.scrollViewContainer}>
                <DeliveryInfoSection />
                <CarouselSection />
                <SellerSection />
                <DescriptionSection />
                <DressDetailList data={data}/>
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
        paddingBottom: 20,
    },
});

export default DressDetailScreen;
