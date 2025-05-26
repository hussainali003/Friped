import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Header } from '../../../common';

import DressOrderTrackSection from '../sections/dressOrderTrack/DressOrderTrackSection';
import DressOrderDetailSection from '../sections/dressOrderTrack/DressOrderDetailSection';
import DressOrderCategorylList from '../sections/dressOrderTrack/dressOrderCategorylList';

import data from '../../../static/DressDetail';

import * as colors from '../../../config/colors';

const DressOrderTrackScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Track Order" />
            <ScrollView contentContainerStyle={styles.scrollContentContainer} style={styles.scrollContainer}>
                <DressOrderDetailSection />
                <DressOrderTrackSection />
                <DressOrderCategorylList data={data} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: colors.background_one,
    },
    scrollContentContainer: {
        paddingVertical: 20,
    },
});

export default DressOrderTrackScreen;
