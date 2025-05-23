import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PlusSvg from '../../../assets/images/plus.svg';
import MinusSvg from '../../../assets/images/minus.svg';

import * as colors from '../../../config/colors';

const QuestionCard = ({title, description}) => {
    const [showDropDown, setShowDropDown] = useState(false);

    const handleChangeShowDropDown = () => {
        setShowDropDown(!showDropDown);
    };

    return (
        <TouchableOpacity onPress={handleChangeShowDropDown} style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                {showDropDown ? <MinusSvg /> : <PlusSvg />}
            </View>
            {showDropDown && (
                <View style={styles.dropDownContainer}>
                    <Text style={styles.description}>{description}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 8,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: colors.text_primary,
    },
    dropDownContainer: {
        marginTop: 12,
        paddingTop: 12,
        borderTopWidth: 1,
        borderColor: colors.dashLine,
    },
    description: {
        lineHeight: 20,
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#808080',
    },
});

export default QuestionCard;
