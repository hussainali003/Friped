import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NoticeSection, SectionWithTitleAndImages } from '../../../../common';

const DressDetailListItem = ({arrItem}) => {
    const navigation = useNavigation();

    if (arrItem[0]?.title === 'Notice') {
        return (
            <NoticeSection style={styles.notice} />
        );
    }

    const handleNavigate = () => {
        navigation.navigate('HomeTab', {screen: 'DressDetail'});
    };

    return (
        <SectionWithTitleAndImages
            key={arrItem[0]?.groupedTitle}
            title={arrItem[0]?.groupedTitle || ''}
            leftTitle={arrItem[0]?.title}
            leftImage={arrItem[0]?.image}
            rightTitle={arrItem[1]?.title}
            rightImage={arrItem[1]?.image}
            onPress={handleNavigate}
        />
    );
};

const styles = StyleSheet.create({
    notice: {
        marginTop: 0,
    },
});

export default DressDetailListItem;
