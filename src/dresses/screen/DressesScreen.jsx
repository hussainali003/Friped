import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DeliveryInfoSection, Header} from '../../common';

import FilterSection from '../section/FilterSection';
import DressesListSection from '../section/DressesListSection';

import data from '../../static/Dresses';

import * as colors from '../../config/colors';

const DressesScreen = ({navigation}) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <Header title={navigation.route || 'dresses'} />
            <DeliveryInfoSection />
            <FilterSection />
            <DressesListSection data={data} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
    flatList: {
        backgroundColor: colors.white,
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: colors.background_one,
    },
    contentContainer: {
        paddingBottom: 20,
    },
});

export default DressesScreen;
