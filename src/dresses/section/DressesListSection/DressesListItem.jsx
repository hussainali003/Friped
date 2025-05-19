import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as colors from '../../../config/colors';
import { NoticeSection, SectionWithTitleAndImages } from '../../../common';

const SCREEN_WIDTH = Dimensions.get('window').width;

const item_width = (SCREEN_WIDTH - 16 * 2 - 24) / 2;

const DressesListItem = ({arrItem}) => {

    if (arrItem[0]?.title === 'Notice') {
        return (
            <NoticeSection style={styles.notice} />
        );
    }

    if (arrItem[0]?.title === 'Men’s fashion' ) {
        return (
            <SectionWithTitleAndImages
                title="Other Categories"
                leftImage={arrItem[0]?.image}
                leftTitle="Men's fashion"
                rightImage={arrItem[1]?.image}
                rightTitle="Women's faasdasdshion"
            />
        );
    }

    return (
        <View style={styles.container}>
            {arrItem.map((item) => {
                const title = item?.title;
                const image = item?.image;

                return (
                    <TouchableOpacity key={title} style={[styles.imageWithLabelContainer, {width: item_width}]}>
                        <Image source={image} style={styles.image}/>
                        <Text style={styles.imageText}>{title}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    notice: {
        marginTop: 0,
    },
    container: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        columnGap: 24,
    },
    imageWithLabelContainer: {
        rowGap: 10,
        marginBottom: 32,
    },
    image: {
        height: 260,
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
});

export default DressesListItem;
