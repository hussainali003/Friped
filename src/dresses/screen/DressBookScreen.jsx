import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DeliveryInfoSection, Header } from '../../common';

import DressCategorylList from '../components/dressCategorylList';

import data from '../../static/DressDetail';

import * as colors from '../../config/colors';
import DetailSection from '../section/dressBook/DetailSection';
import MeasurementSection from '../section/dressBook/MeasurementSection';

const DressBookScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Dress a book" />
            <ScrollView contentContainerStyle={styles.scrollViewContentContainer} style={styles.scrollViewContainer}>
                <DeliveryInfoSection />
                <DetailSection />
                <MeasurementSection />
                <DressCategorylList data={data}/>
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

export default DressBookScreen;
