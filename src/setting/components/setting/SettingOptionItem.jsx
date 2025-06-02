import { ActivityIndicator } from 'react-native';

import { TouchableOpacity, Text } from '../../../common';

const SettingOptionItem = ({item, disabled, isLoading, onPress}) => {
    const IconComponent = item.icon;

    const getLoadingAndTitleGiveLoadingIndicator = (loading, title) => {
        return title === loading ? true : false;
    };

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            h={44}
            flexDirection="row"
            alignItems="center"
            columnGap={6}
            ph={12}
            borderWidth={1}
            borderRadius={8}
            borderColor="#E6E6E6"
        >
            {getLoadingAndTitleGiveLoadingIndicator(isLoading, item.title) ?
                <ActivityIndicator /> : <IconComponent />
            }
            <Text size={14} color="#77787D">
                {item.title}
            </Text>
        </TouchableOpacity>
    );
};

export default SettingOptionItem;
