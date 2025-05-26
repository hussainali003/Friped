import { ImageBackground, StyleSheet, View } from 'react-native';


import TransferProfileInfo from '../../components/TransferProfileInfo';
import TransferButton from '../../components/TransferButton';

import WalletShare from '../../../../assets/images/wallet_send.svg';
import WalletUpload from '../../../../assets/images/wallet_upload.svg';

import WalletBackgroundPng from '../../../../assets/images_png/wallet_background.png';

const TransferSection = ({item}) => {

    return (
        <ImageBackground
            source={WalletBackgroundPng}
            style={styles.container}
            imageStyle={styles.image}
        >
            <TransferProfileInfo item={item} />
            <View style={styles.buttonsContainer}>
                <TransferButton icon={<WalletShare />} title="Transfer" />
                <TransferButton icon={<WalletUpload />} title="Withdraw" />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
    image: {
        opacity: 0.1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        columnGap: 30,
        marginBottom: 45,
    },
});

export default TransferSection;
