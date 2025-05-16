import {TouchableOpacity, View, StyleSheet} from 'react-native';

// import images from assets
import AppNameSvg from '../assets/images/app_name.svg';
import SearchAltLightSvg from '../assets/images/search_alt_light.svg';
import MeassageLightSvg from '../assets/images/message_light.svg';
import BellPinLightSvg from '../assets/images/bell_pin_light.svg';

const MainHeader = ({title, mb, style}) => {
    return (
        <View style={[styles.container, {marginBottom: mb}, style]}>
            <View style={styles.leftIconContainer}>
                <AppNameSvg width={67} height={37} />
            </View>
            <View style={styles.rightContainer}>
                <TouchableOpacity style={styles.rightButton}>
                    <SearchAltLightSvg />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightButton}>
                    <MeassageLightSvg />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightButton}>
                    <BellPinLightSvg />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftIconContainer: {
        marginLeft: 21,
    },
    rightContainer: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 2,
        marginLeft: 'auto',
        paddingRight: 12,
    },
    rightButton: {
        paddingVertical: 16,
        paddingHorizontal: 8,
    },
});

export default MainHeader;
