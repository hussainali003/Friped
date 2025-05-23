import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Header } from '../../common';

import SearchSection from '../sections/faq/SearchSection';
import QuestionSection from '../sections/faq/QuestionSection';

import * as colors from '../../config/colors';
import FooterSection from '../sections/faq/FooterSection';

const FaqScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="FAQ"/>
            <ScrollView contentContainerStyle={styles.scrollContentContainer} style={styles.scrollContainer}>
                <SearchSection />
                <QuestionSection />
                <FooterSection />
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
        backgroundColor: colors.white,
    },
    scrollContentContainer: {
        paddingVertical: 20,
    },
});

export default FaqScreen;
