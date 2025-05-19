import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as colors from '../config/colors';

const SectionWithTitleAndImages = ({title, leftTitle, leftImage,rightTitle, rightImage, style}) => {
    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate('HomeTab', { screen: 'Dresses' });
    };

    return (
            <View style={[styles.container, style]}>
                {title && <Text style={styles.title}>{title}</Text>}
                <View style={styles.contentContainer}>
                    <TouchableOpacity onPress={handleNavigate} style={styles.imageWithLabelContainer}>
                        {leftImage && (
                            <>
                                <Image source={leftImage} style={styles.image}/>
                                <Text style={styles.imageText}>{leftTitle}</Text>
                            </>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNavigate} style={styles.imageWithLabelContainer}>
                        {rightImage && (
                            <>
                                <Image source={rightImage} style={styles.image}/>
                                <Text style={styles.imageText}>{rightTitle}</Text>
                            </>
                        )}
                    </TouchableOpacity>
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
