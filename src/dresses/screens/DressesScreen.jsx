import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DeliveryInfoSection, Header} from '../../common';

import FilterSection from '../sections/FilterSection';
import DressesListSection from '../sections/DressesListSection';

import data from '../../static/Dresses';

import * as colors from '../../config/colors';

const DressesScreen = ({}) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Dresses" />
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
});

export default DressesScreen;
