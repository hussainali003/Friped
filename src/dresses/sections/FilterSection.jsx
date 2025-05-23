import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import CollapseLightSvg from '../../assets/images/collapse_light.svg';
import FilterAltSvg from '../../assets/images/filter_alt.svg';
import ChevronDownDarkSvg from '../../assets/images/chevron_down_dark.svg';


import * as colors from '../../config/colors';

const FilterSection = ({}) => {

    return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.contentContainer}>
                    <CollapseLightSvg />
                    <Text>Sort</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentContainer}>
                    <Text>Category</Text>
                    <ChevronDownDarkSvg />
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentContainer}>
                    <Text>Gender</Text>
                    <ChevronDownDarkSvg />
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentContainer}>
                    <Text>Filters</Text>
                    <FilterAltSvg />
                </TouchableOpacity>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap: 1,
        backgroundColor: 'rgba(183, 110, 121, 0.2)',
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 6,
        paddingVertical: 10,
        backgroundColor: colors.background_two,
    },
});

export default FilterSection;
