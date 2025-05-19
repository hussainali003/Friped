import { ScrollView, StyleSheet} from 'react-native';

import DressesListEmpty from './DressesListEmpty';
import DressesListItem from './DressesListItem';
import DressesListHeader from './DressesListHeader';

import chunkArray from '../../../util/ChunkArray';

import * as colors from '../../../config/colors';

const DressesListSection = ({data = []}) => {
    const mutatedData = chunkArray(data);

    return (
        <ScrollView contentContainerStyle={styles.scrollContentContainer} style={styles.scrollContainer}>
            <DressesListHeader />
            {!data.length && (
                <DressesListEmpty />
            )}
            {mutatedData.map((item, index) => {
                return (
                    <DressesListItem key={index} arrItem={item} arrIndex={index} totalDresses={data.length} />
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: colors.white,
    },
    scrollContentContainer: {
        flexGrow: 1,
    },
});

export default DressesListSection;
