/* eslint-disable react-native/no-inline-styles */
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { Button, DropDown, Header, View, Text, TextInput, TouchableOpacity } from '../../common';

import EditProfileDatePicker from '../components/editProfile/EditProfileDatePicker';

import CoverPhotoSvg from '../../assets/images/cover_photo.svg';
import CoverPencilSvg from '../../assets/images/cover_pencil.svg';
import ChevronRightSvg from '../../assets/images/chevron_right.svg';

import {validateDate, validateEmail, validateFullName, validateGender, validatePhoneNumber} from '../../util/validateForm';

import * as colors from '../../config/colors';

const EditProfileScreen = () => {
    const route = useRoute();
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const isRegister = route?.params?.isRegister ?? false;

    const [date, setDate] = useState(null);
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [errorDate, setErrorDate] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorGender, setErrorGender] = useState('');
    const [errorFullName, setErrorFullName] = useState('');
    const [errorPhoneNumber, setErrorPhoneNumber] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const [selectedGender, setSelectedGender] = useState('');
    const [selectedType, setSelectedType] = useState('Both');

    const handleChangeEmail = (e) => {
        setEmail(e);
        setErrorEmail(validateEmail(e));
    };
    const handleChangeFullName = (e) => {
        setFullName(e);
        setErrorFullName(validateFullName(e));
    };
    const handleChangePhoneNumber = (e) => {
        setPhoneNumber(e);
        setErrorPhoneNumber(validatePhoneNumber(e));
    };

    const handleSelectGender = (role) => {
        setErrorGender(validateGender(role));
        setSelectedGender(role);
    };

    const handleSelectType = (role) => {
        setSelectedType(role);
    };


    const handleSubmit = async () => {
        setIsLoading(true);

        const dateError = validateDate(date);
        const emailError = validateEmail(email);
        const fullNameError = validateFullName(fullName);
        const genderError = validateGender(selectedGender);
        const phoneNumberError = validatePhoneNumber(phoneNumber);

        setErrorDate(dateError);
        setErrorEmail(emailError);
        setErrorGender(genderError);
        setErrorFullName(fullNameError);
        setErrorPhoneNumber(phoneNumberError);

        if (!dateError && !emailError && !fullNameError && !phoneNumberError && !genderError) {
            try {
                const currentUser = auth().currentUser;

                if (!currentUser) {
                    setErrorMessage('Please try again some other time.');
                    setIsLoading(false);

                    return;
                }

                const userDoc = {
                    fullName,
                    birthDate: date,
                    email,
                    phoneNumber,
                    gender: selectedGender,
                    role: selectedType,
                    updatedAt: firestore.FieldValue.serverTimestamp(),
                };

                await firestore().collection('users').doc(currentUser.uid).set(userDoc, { merge: true });

                navigation.replace('LocationPremission');
            } catch (err) {
                setErrorMessage(err.message);
            }
        }

        setIsLoading(false);
    };

    return (
        <View flex={1} backgroundColor={colors.background_two} style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <Header title={isRegister ? 'Edit profile' : 'Profile'}/>
            <ScrollView style={{backgroundColor: colors.background_one}}>
                <View h={150} justifyContent="flex-end" backgroundColor={colors.secondary}>
                    <TouchableOpacity alignSelf="flex-end" pv={16} ph={16} mb={-24}>
                        <CoverPencilSvg />
                    </TouchableOpacity>
                    <View flexDirection="row" ml={16} mb={-50} zIndex={1}>
                        <TouchableOpacity alignItems="center">
                            <View mb={-15}>
                                <CoverPhotoSvg />
                            </View>
                            <CoverPencilSvg />
                        </TouchableOpacity>
                        {isRegister && (
                            <View flex={1} flexDirection="row" alignItems="center" justifyContent="space-between" alignSelf="flex-end" ph={16}>
                                <View>
                                    <Text size={18} fontFamily="bold" color={colors.dashLine}>Hussain Ali</Text>
                                    <TouchableOpacity>
                                        <Text size={12} color={colors.text_primary}>Switch as seller</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity pv={12} ph={12}>
                                    <ChevronRightSvg />
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </View>
                <View mb={20} mt={70} mh={16}>
                    <TextInput value={fullName} onChangeText={handleChangeFullName} label="Full name" placeholder="Enter name" mb={errorFullName ? 4 : 15}/>
                    {errorFullName && <Text size={14} mb={4} color={colors.text_error}>{errorFullName}</Text>}
                    <EditProfileDatePicker date={date} setDate={setDate} errorDate={errorDate} setErrorDate={setErrorDate} />
                    {errorDate && <Text size={14} mb={4} color={colors.text_error}>{errorDate}</Text>}
                    <TextInput value={phoneNumber} onChangeText={handleChangePhoneNumber} inputMode="tel" label="Phone number" placeholder="923162742352" mb={errorPhoneNumber ? 4 : 15}/>
                    {errorPhoneNumber && <Text size={14} mb={4} color={colors.text_error}>{errorPhoneNumber}</Text>}
                    <TextInput value={email} onChangeText={handleChangeEmail} inputMode="email" label="Email address" placeholder="Enter here" mb={errorEmail ? 4 : 15}/>
                    {errorEmail && <Text size={14} mb={4} color={colors.text_error}>{errorEmail}</Text>}
                    <DropDown selected={selectedGender} roles={['Men', 'Women']} onPress={handleSelectGender} style={{marginBottom: errorGender ? 4 : 15}} />
                    {errorGender && <Text size={14} mb={4} color={colors.text_error}>{errorGender}</Text>}
                    <DropDown selected={selectedType} setSelected={setSelectedType} roles={['Both', 'Seller']} onPress={handleSelectType} />
                    {errorMessage && <Text size={14} mb={15} color={colors.text_error}>{errorMessage}</Text>}
                    <Button loading={isLoading} onPress={handleSubmit} title="Save" />
                </View>
            </ScrollView>
        </View>
    );
};

export default EditProfileScreen;
