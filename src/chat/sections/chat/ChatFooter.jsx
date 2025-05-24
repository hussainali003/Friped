import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import ShareBackgroundSvg from '../../../assets/images/share_background.svg';
import CameraSvg from '../../../assets/images/camera_light.svg';
import MicSvg from '../../../assets/images/mic_light.svg';



import * as colors from '../../../config/colors';

const ChatFooter = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Send Message" placeholderTextColor="#808080" style={styles.input} />
                <TouchableOpacity>
                    <ShareBackgroundSvg />
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <TouchableOpacity style={styles.button}>
                    <CameraSvg />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <MicSvg />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 8,
        backgroundColor: colors.background_one,
    },
    inputContainer: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 7,
        marginLeft: 16,
        borderWidth: 1,
        borderRadius: 28,
        borderColor: '#04040426',
        backgroundColor: '#F6F6F6',
    },
    input: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#808080',
    },
    contentContainer: {
        marginLeft: 4,
        marginRight: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        paddingVertical:8,
        paddingHorizontal: 8,
    },
});

export default ChatFooter;
