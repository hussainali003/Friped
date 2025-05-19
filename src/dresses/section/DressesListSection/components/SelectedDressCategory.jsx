import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as colors from '../../../../config/colors';

const SCREEN_WIDTH = Dimensions.get('window').width;

const item_width = (SCREEN_WIDTH - 32 - (16 * (3 - 1))) / 3;

const SelectedDressCategory = ({data = []}) => {

    return (
        <View>
            <ScrollView horizontal={true} contentContainerStyle={styles.contentContainer} style={styles.scrollContainer}>
                {data.map(({ title, image}, index) => {
                    return (
                        <TouchableOpacity key={index} style={[styles.imageWithLabelContainer, {width: item_width}]}>
                            <Image source={image} style={styles.image}/>
                            <Text style={styles.imageText}>{title}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
            <View  style={styles.lineContainer}>
                <View style={styles.line}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: colors.white,
    },
    contentContainer: {
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 16,
        columnGap: 16,
    },
    imageWithLabelContainer: {
        rowGap: 10,
    },
    image: {
        height: 170,
        width: '100%',
        borderRadius: 10,
        resizeMode: 'cover',
    },
    imageText: {
        marginLeft: 8,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: colors.dashLine,
    },
    lineContainer: {
        height: 1,
        backgroundColor: colors.white,
    },
    line: {
        flex: 1,
        marginHorizontal: 16,
        backgroundColor: colors.background_two,
    },
});

export default SelectedDressCategory;
