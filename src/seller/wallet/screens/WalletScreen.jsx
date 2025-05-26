import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';

import WalletHeader from '../components/WalletHeader';

import WalletList from '../sections/wallet/WalletList';
import TransferSection from '../sections/wallet/TransferSection';

import * as colors from '../../../config/colors';

const WalletScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <WalletHeader title="Wallet"/>
            <TransferSection />
            <WalletList />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dashLine,
    },
});

export default WalletScreen;
