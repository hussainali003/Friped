import { TouchableOpacity,  StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import components from common
import { Button } from '../../common';

// import images from assets
import AppNameSvg from '../../assets/images/app_name.svg';
import GoogleSvg from '../../assets/images/google_icon.svg';
import FranceFlagSvg from '../../assets/images/france_flag.svg';
import ChevronDownSvg from '../../assets/images/chevron_down.svg';
import PersonSettingSvg from '../../assets/images/person_setting.svg';



// import colors from config
import * as colors from '../../config/colors';

const LoginScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <View style={styles.appNameSvgContainer}>
                <AppNameSvg />
            </View>
            <View style={styles.personSettingSvgContainer}>
                <PersonSettingSvg />
            </View>
            <View style={styles.textContainer}>
                <View style={styles.dashLine}/>
                <Text style={styles.loginText}>Log in or sign up</Text>
                <View style={styles.dashLine}/>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputContent}>
                    <FranceFlagSvg />
                    <Text>33</Text>
                    <ChevronDownSvg />
                </View>
                <TextInput inputMode="numeric" maxLength={10} placeholder="Enter phone number" placeholderTextColor={colors.text_dim} style={styles.input}/>
            </View>
            <Button title="Send OTP" mb={25} />
            <View style={styles.textContainer}>
                <View style={styles.dashLine}/>
                <Text style={styles.orText}>OR</Text>
                <View style={styles.dashLine}/>
            </View>
            <TouchableOpacity style={styles.googleSvgContainer}>
                <GoogleSvg />
            </TouchableOpacity>
            <Text style={styles.footerText}>By continuing you will accept the <Text style={styles.linkText}>Terms of Use</Text> and <Text style={styles.linkText}> Privacy and Policy</Text> of Cashlance.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
    appNameSvgContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 35,
    },
    personSettingSvgContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 35,
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 8,
        marginBottom: 20,
    },
    loginText: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
    },
    dashLine: {
        width: 41,
        borderWidth: 0.5,
        borderColor: colors.dashLine,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        marginHorizontal: 16,
        marginBottom: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.secondary,
    },
    inputContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8,
        marginLeft: 22,
        marginRight: 12,
    },
    input: {
        flex: 1,
        fontFamily: 'Lato-Light',
        color: colors.text_dim,
    },
    orText: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
    },
    googleSvgContainer: {
      alignItems: 'center',
    },
    footerText: {
        marginTop: 'auto',
        marginBottom: 28,
        marginHorizontal: 16,
        textAlign: 'center',
        fontFamily: 'Lato-Light',
        color: colors.text_dim,
    },
    linkText: {
        color: colors.text_dim,
        fontFamily: 'Lato-Regular',
    },
});

export default LoginScreen;
