import { TouchableOpacity,  StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import images from assets
import AppNameSvg from '../../assets/images/app_name.svg';
import GoogleSvg from '../../assets/images/google_icon.svg';
import FranceFlagSvg from '../../assets/images/france_flag.svg';
import ChevronDownSvg from '../../assets/images/chevron_down.svg';
import PersonSettingSvg from '../../assets/images/person_setting.svg';

// import colors from config
import * as colors from '../../config/colors';

const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
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
            <TouchableOpacity title="Send OTP" style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Send OTP</Text>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <View style={styles.dashLine}/>
                <Text style={styles.orText}>OR</Text>
                <View style={styles.dashLine}/>
            </View>
            <TouchableOpacity title="Send OTP" style={styles.googleSvgContainer}>
                <GoogleSvg />
            </TouchableOpacity>
            <Text style={styles.footerText}>By continuing you will accept the Terms of Use and Privacy and Policy of Cashlance.</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
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
        fontSize: 20,
        fontWeight: 600,
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
        color: colors.text_dim,
    },
    loginButton: {
        paddingVertical: 14,
        marginHorizontal: 16,
        marginBottom: 25,
        borderRadius: 10,
        backgroundColor: colors.secondary,
    },
    loginButtonText: {
        textAlign: 'center',
        fontSize: 16,
        color: colors.white,
    },
    orText: {
        fontSize: 14,
        fontWeight: 600,
    },
    googleSvgContainer: {
      alignItems: 'center',
      marginBottom: 18,
    },
    footerText: {
        marginHorizontal: 16,
        marginBottom: 34,
        textAlign: 'center',
        color: colors.text_dim,
    },
});

export default LoginScreen;
