import { TouchableOpacity, View, StyleSheet} from 'react-native';

import ArrowLeftSvg from '../../../assets/images/arrow_left_light.svg';

import * as colors from '../../../config/colors';

const GiveRatingHeader = ({selectedPage, setSelectedPage}) => {

    const handleGoBack = () => {
        setSelectedPage(selectedPage - 1);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleGoBack} style={styles.leftButton}>
                <ArrowLeftSvg />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    leftButton: {
        paddingVertical: 12,
        paddingHorizontal: 12,
    },
});

export default GiveRatingHeader;
