import {StyleSheet, Text, View} from 'react-native';

const DressesListEmpty = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.txt}>
            No dresses in near by area
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontFamily: 'sLato-Regular',
        fontSize: 14,
        marginTop: 48,
    },
});

export default DressesListEmpty;
