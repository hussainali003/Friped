import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity, Text, View } from '../../../common';

import ChevronRightSvg from '../../../assets/images/chevron_right.svg';

const getTileGiveLocation = (title) => {
    switch(title) {
        case 'List of transactions':
            return 'Transactions';
        case 'My address':
            return 'LocationOptions';
        default:
            return title;
    }
};

const ProfileOptionItem = ({item}) => {
    const navigation = useNavigation();

    const handleNavigate = (title) => {
        navigation.navigate(getTileGiveLocation(title));
    };

    return (
        <View mb={8}>
            <TouchableOpacity
                h={44}
                flexDirection="row"
                alignItems="center"
                columnGap={6}
                ph={12}
                borderWidth={1}
                borderRadius={8}
                borderColor="#E6E6E6"
                onPress={() => handleNavigate(item.title)
            }>
                {item.icon && (
                    <item.icon />
                )}
                <Text size={14} color="#77787D">
                    {item.title}
                </Text>
                <View ml="auto">
                    <ChevronRightSvg />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileOptionItem;
