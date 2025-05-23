/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import CoverPhotoSvg from '../../assets/images/cover_photo.svg';
import CoverPencilSvg from '../../assets/images/cover_pencil.svg';
import ChevronRightSvg from '../../assets/images/chevron_right.svg';

import * as colors from '../../config/colors';

const ProfileMediaSection = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.editBackgroundContainer}>
                <CoverPencilSvg />
            </TouchableOpacity>
            <View style={styles.editProfileContainer}>
                <TouchableOpacity style={{alignItems: 'center'}}>
                    <CoverPhotoSvg style={{marginBottom: -15}}/>
                    <CoverPencilSvg />
                </TouchableOpacity>
                <View style={styles.editProfileContentContainer}>
                    <View>
                        <Text style={styles.text_heading}>Hussain Ali</Text>
                        <TouchableOpacity>
                            <Text style={styles.text}>Switch as seller</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.chevronContainer}>
                        <ChevronRightSvg />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 150,
        justifyContent: 'flex-end',
        backgroundColor: colors.secondary,
    },
    editBackgroundContainer: {
        alignSelf: 'flex-end',
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginBottom: -24,
    },
    editProfileContainer: {
        flexDirection: 'row',
        marginLeft: 16,
        marginBottom: -50,
        zIndex: 1,
    },
    editProfileContentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    chevronContainer: {
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    text: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: colors.dashLine,
    },
    text_heading: {
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        color: colors.text_primary,
    },
});

export default ProfileMediaSection;
