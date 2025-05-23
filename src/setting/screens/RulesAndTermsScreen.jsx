import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Header } from '../../common';

import DescriptionContent from '../components/rulesAndTerms/DescriptionContent';

import * as colors from '../../config/colors';

const RulesAndTermsScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Rules and terms"/>
            <ScrollView contentContainerStyle={styles.scrollContentContainer} style={styles.scrollContainer}>
                <DescriptionContent title="1. Clause 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem." />
                <DescriptionContent title="2. Clause 2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem." />
                <DescriptionContent title="3. Clause 3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in. Consectetur eget id morbi amet amet, in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse aenean leo pharetra in sit semper et. Amet quam placerat sem." style={styles.descriptionContentContainer}/>
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
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    descriptionContentContainer: {
        borderBottomWidth: 0,
        marginBottom: 0,
    },
});

export default RulesAndTermsScreen;
