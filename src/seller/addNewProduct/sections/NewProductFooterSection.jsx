import { StyleSheet } from 'react-native';

import { Button } from '../../../common';
import AddNewProductTextInput from '../components/AddNewProductTextInput';


const NewProductFooterSection = () => {
    return (
        <>
            <AddNewProductTextInput label="Other information" placeholder="Type here....." inputStyle={styles.input} />
            <Button title="Post" style={styles.button} />
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 135,
    },
    button: {
        marginHorizontal: 0,
        marginTop: 20,
    },
});

export default NewProductFooterSection;
