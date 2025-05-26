import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Button } from '../../../../common';

import ModalSvg from '../../../../assets/images/modal.svg';
import CloseSquareLightSvg from '../../../../assets/images/close_square_light.svg';

import * as colors from '../../../../config/colors';

const ModalSection = ({isVisible, setIsVisiable}) => {
    const navigation = useNavigation();

    const handleModalClose = () => {
        setIsVisiable(false);
    };

    const handleNavigateToHome = () => {
        setIsVisiable(false);
        navigation.navigate('Home');
    };

    return (
        <Modal useNativeDriver={true} onBackdropPress={handleModalClose} isVisible={isVisible} style={styles.modal}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleModalClose} style={styles.crossButton}>
                    <CloseSquareLightSvg />
                </TouchableOpacity>
                <View style={styles.imageContainer}>
                    <ModalSvg />
                </View>
                <Text style={[styles.text, styles.text_one]}>Request Sent</Text>
                <Text style={[styles.text]}>We've forwarded all the information about the dress you reserved to the seller. We'll wait for up to 4 hours for a response from the dress owner; if we don't receive any communication, your order will be cancelled.</Text>
                <Button onPress={handleNavigateToHome} title="Back to Home" style={styles.button} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
    },
    container: {
        height: 426,
        paddingHorizontal: 16,
        marginHorizontal: 16,
        borderRadius: 10,
        backgroundColor: colors.background_one,
    },
    crossButton: {
        marginLeft: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        marginTop: 14,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginVertical: 18,
        marginHorizontal: 0,
    },
    text_one: {
        marginBottom: 14,
        fontSize: 24,
        color: colors.dashLine,
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: '#666666',
    },
});

export default ModalSection;
