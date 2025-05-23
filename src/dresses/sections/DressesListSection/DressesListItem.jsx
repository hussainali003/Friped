import { StyleSheet } from 'react-native';

import { NoticeSection, SectionWithTitleAndImages } from '../../../common';
import { useNavigation } from '@react-navigation/native';

const DressDetailListItem = ({arrItem}) => {
    const navigation = useNavigation();

    if (arrItem[0]?.title === 'Notice') {
        return (
            <NoticeSection />
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
            style={[arrItem[0]?.title === 'Wedding dress' && styles.SectionWithTitleAndImages]}
        />
    );
};

const styles = StyleSheet.create({
    SectionWithTitleAndImages: {
        marginTop: 18,
    },
});

export default DressDetailListItem;
