import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
    Header,
} from '../../../common';

import NewProductHeader from '../sections/NewProductHeaderSection';
import NewProductDetailSection from '../sections/NewProductDetailSection';
import NewProductFooterSection from '../sections/NewProductFooterSection';

import * as colors from '../../../config/colors';

const AddNewProductScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <Header title="Add New Product"/>
            <ScrollView contentContainerStyle={styles.scrollViewContentContainer} style={styles.scrollViewContainer}>
                <NewProductHeader />
                <NewProductDetailSection />
                <NewProductFooterSection />
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
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
});

export default AddNewProductScreen;
