import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Button } from '../../../../common';

import ModalBoySvg from '../../../../assets/images/modal_boy.svg';
import CloseSquareLightSvg from '../../../../assets/images/close_square_light.svg';

import * as colors from '../../../../config/colors';

const PaymentCompleteModal = ({isVisible, setIsVisiable}) => {
    const navigation = useNavigation();

    const handleModalClose = () => {
        setIsVisiable(false);
    };

    const handleNavigateToOrderTrack = () => {
        setIsVisiable(false);
        navigation.navigate('HomeTab', {screen: 'OrderTrack'});
    };

    return (
        <Modal useNativeDriver={true} onBackdropPress={handleModalClose} isVisible={isVisible} style={styles.modal}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleModalClose} style={styles.crossButton}>
                    <CloseSquareLightSvg />
                </TouchableOpacity>
                <View style={styles.imageContainer}>
                    <ModalBoySvg />
                </View>
                <Text style={[styles.text, styles.text_one]}>Order Confirmed</Text>
                <Text style={styles.text}>Your order is now prepared, and you can use the tracking number 123456789123 provided to monitor its status.</Text>
                <Button onPress={handleNavigateToOrderTrack} title="Track now" style={styles.button} />
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

export default PaymentCompleteModal;
