import { Image, StyleSheet, Text, View } from 'react-native';

import * as colors from '../../config/colors';

const SectionWithTitleAndImages = ({title, leftTitle, leftImage,rightTitle, rightImage}) => {
    return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.contentContainer}>
                    <View style={styles.imageWithLabelContainer}>
                        <Image source={leftImage} style={styles.image}/>
                        <Text style={styles.imageText}>{leftTitle}</Text>
                    </View>
                    <View style={styles.imageWithLabelContainer}>
                        <Image source={rightImage} style={styles.image}/>
                        <Text style={styles.imageText}>{rightTitle}</Text>
                    </View>
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        marginTop: 35,
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 12,
    },
    title: {
        marginBottom: 18,
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        color: colors.text_primary,
    },
    imageWithLabelContainer: {
        flex: 1,
        rowGap: 10,
    },
    image: {
        borderRadius: 10,
        width: '100%',
    },
    imageText: {
        marginLeft: 8,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: colors.dashLine,
    },
});

export default SectionWithTitleAndImages;
