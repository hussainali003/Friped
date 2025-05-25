import { Dimensions, StyleSheet, ScrollView, View, Text, Image } from 'react-native';

import data from '../../../../../static/DashboardCategory';

import * as colors from '../../../../../config/colors';

const SCREEN_WIDTH = Dimensions.get('window').width;

const HeaderCategorySection = ({item}) => {
    const categories = item?.categories || 6;

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{`Your Categories (${categories})`}</Text>
            </View>
            <ScrollView horizontal
                style={styles.scrollViewContainer}
                contentContainerStyle={styles.scrollViewContentContainerStyle}
            >
                {data.map((i, index) => (
                    <View key={index} style={[styles.cardContainer, {width: (SCREEN_WIDTH - 32 - 30) / 4}]}>
                        <View style={[styles.imageContainer]}>
                            <Image source={i.image} style={styles.image} />
                        </View>
                        <Text style={[styles.text]}>{i.name}</Text>
                    </View>
                ))}
           </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        rowGap: 12,
        paddingHorizontal: 16,
    },
    scrollViewContainer: {
    },
    scrollViewContentContainerStyle: {
        columnGap: 10,
    },
    cardContainer: {
        rowGap: 10,
    },
    imageContainer: {
        width: '100%',
        height: 128,
        overflow: 'hidden',
        borderRadius: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    text: {
        fontSize: 10,
        fontFamily: 'Lato-Regular',
        color: colors.dashLine,
    },
});

export default HeaderCategorySection;
