import { ScrollView, StyleSheet, Text,  TextInput,  View } from 'react-native';

import { Button } from '../../common';

import * as colors from '../../config/colors';

const GiveFeedBackPage = ({selectedPage, setSelectedPage}) => {

    const handleChangePage = () => {
        setSelectedPage(selectedPage + 1);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContentContainer} style={styles.scrollViewContainer}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>What would you share with others about your dress reservation with Ms. Williams?</Text>
            </View>
            <View>
                <Text style={styles.text}>Type your feedback</Text>
                <TextInput numberOfLines={6} placeholder="Type here....." placeholderTextColor="#808080" style={styles.input} />
            </View>
            <Button onPress={handleChangePage} title="Continue" style={styles.button} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        backgroundColor: colors.background_one,
    },
    scrollViewContentContainer: {
        paddingHorizontal: 16,
        rowGap: 30,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 4,
    },
    title: {
        lineHeight: 30,
        fontSize: 20,
        fontFamily: 'Lato-Bold',
        color: colors.dashLine,
    },
    input: {
        height: 135,
        paddingHorizontal: 16,
        textAlignVertical: 'top',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ED7D5B',
        color: colors.text_primary,
    },
    button: {
        marginHorizontal: 0,
    },
    text: {
        marginBottom: 10,
        lineHeight: 20,
        color: colors.text_primary,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
    },
});

export default GiveFeedBackPage;
