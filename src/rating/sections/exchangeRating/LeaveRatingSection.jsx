import { useNavigation } from '@react-navigation/native';
import {Text,  View, StyleSheet, TouchableOpacity} from 'react-native';

import StarLargeSvg from '../../../assets/images/star_large.svg';

import * as colors from '../../../config/colors';

const LeaveRatingSection = () => {
    const navigation = useNavigation();

    const handleNavigateToExchangeRating = () => {
        navigation.navigate('GiveRating');
    };

    return (
        <TouchableOpacity
            onPress={handleNavigateToExchangeRating}
            style={styles.container}
        >
            <StarLargeSvg />
            <View style={styles.contentContainer}>
                <Text style={styles.text_heading}>Leave a rating</Text>
                <Text style={styles.text}>Rate your experience for the Mermaid wedding dress</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderColor: colors.dashLine,
        columnGap: 16,
    },
    contentContainer: {
        flex: 1,
    },
    text: {
        lineHeight: 20,
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#ADB5BD',
    },
    text_heading: {
        marginBottom: 4,
        fontSize: 20,
        fontFamily: 'Lato-Bold',
        color: colors.dashLine,
    },
});

export default LeaveRatingSection;
