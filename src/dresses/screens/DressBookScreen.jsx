import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DeliveryInfoSection, Header } from '../../common';

import ModalSection from '../sections/dressBook/ModalSection';
import DetailSection from '../sections/dressBook/DetailSection';
import MeasurementSection from '../sections/dressBook/MeasurementSection';

import DressCategorylList from '../components/dressCategorylList';

import data from '../../static/DressDetail';

import * as colors from '../../config/colors';

const DressBookScreen = () => {
    const insets = useSafeAreaInsets();
    const [isModalVisiable, setIsModalVisiable] = useState(false);

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Dress a book" />
            <ScrollView contentContainerStyle={styles.scrollViewContentContainer} style={styles.scrollViewContainer}>
                <DeliveryInfoSection />
                <DetailSection />
                <MeasurementSection setIsModalVisiable={setIsModalVisiable} />
                <DressCategorylList data={data}/>
            </ScrollView>
            <ModalSection isVisible={isModalVisiable} setIsVisiable={setIsModalVisiable} />
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
