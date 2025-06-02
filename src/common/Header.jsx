import { useSelector } from 'react-redux';
import {Text, TouchableOpacity, View} from './index';
import { useNavigation } from '@react-navigation/native';

import ArrowLeftSvg from '../assets/images/arrow_left_light.svg';
import SearchAltLightSvg from '../assets/images/search_alt_light.svg';
import MeassageLightSvg from '../assets/images/message_light.svg';
import BellPinLightSvg from '../assets/images/bell_pin_light.svg';

const Header = ({title, disabled, mb, style}) => {
    const navigation = useNavigation();
    const user = useSelector((state) => state.auth.user);

    const handleNavigateToBack = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        } else if (user === 'Seller') {
            navigation.navigate('Dashboard');
        } else if (user === 'Both') {
            navigation.navigate('Home');
        }
    };

    const handleNavigateToInbox = () => {
        navigation.navigate('Inbox');
    };

    const handleNavigateToNotifications = () => {
        navigation.navigate('Notifications');
    };

    return (
        <View w="100%" flexDirection="row" alignItems="center" style={[{marginBottom: mb}, style]}>
            <TouchableOpacity pl={16} ph={8} onPress={handleNavigateToBack} disabled={disabled}>
                <ArrowLeftSvg />
            </TouchableOpacity>
            <Text size={20}>{title}</Text>
            <View flexDirection="row" ml="auto">
                <TouchableOpacity pv={16} ph={10} disabled={disabled}>
                    <SearchAltLightSvg />
                </TouchableOpacity>
                <TouchableOpacity pv={16} ph={10} onPress={handleNavigateToInbox} disabled={disabled}>
                    <MeassageLightSvg />
                </TouchableOpacity>
                <TouchableOpacity pv={16} ph={10} onPress={handleNavigateToNotifications} disabled={disabled}>
                    <BellPinLightSvg />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;
