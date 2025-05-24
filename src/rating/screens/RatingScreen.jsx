import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';

import { Header } from '../../common';

import RatingSection from '../sections/rating/RatingSection';
import FeedBackList from '../sections/rating/FeedBackList';

import * as colors from '../../config/colors';

const RatingScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <Header title="Rating"/>
            <RatingSection />
            <FeedBackList />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
});

export default RatingScreen;
