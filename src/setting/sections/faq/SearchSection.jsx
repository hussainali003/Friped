import { StyleSheet, Text, TextInput, View } from 'react-native';

import SearchAltSmallSvg from '../../../assets/images/search_alt_small.svg';

import * as colors from '../../../config/colors';

const SearchSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>We're available to support you with any and all matters concerning</Text>
            <View style={styles.inputContainer}>
                <SearchAltSmallSvg />
                <TextInput placeholder="Enter Key word here...." placeholderTextColor="#808080" style={styles.input} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        rowGap: 16,
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        color: colors.text_primary,
    },
    inputContainer: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 6,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E6E6E6',
    },
    input: {
        flex: 1,
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#77787D',
    },
});

export default SearchSection;
