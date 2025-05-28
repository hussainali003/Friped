import { StyleSheet, TextInput} from 'react-native';

import * as colors from '../../../config/colors';

const VerifyTextInput = ({index, otp, inputs, handleInputChange, handleKeyPress, handleSubmit}) => {
    return (
        <TextInput
            value={otp[index]}
            inputMode="numeric"
            cursorColor={colors.text_dim}
            maxLength={1}
            autoFocus={index === 0}
            onSubmitEditing={handleSubmit}
            onChangeText={(e) => handleInputChange(e, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.input}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        flex: 1,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.secondary,
        color: colors.text_dim,
    },
});

export default VerifyTextInput;
