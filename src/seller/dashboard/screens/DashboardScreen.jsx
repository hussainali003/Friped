import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
    MainHeader,
} from '../../../common';

import DashboardList from '../sections/dashboardList';

import * as colors from '../../../config/colors';

const DashboardScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <MainHeader title="Wedding Dresses"/>
            <DashboardList />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
});

export default DashboardScreen;
