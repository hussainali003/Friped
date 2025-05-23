import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Button, DropDown, Header, TextInput } from '../../common';

import EditProfileImage from '../sections/ProfileMediaSection';

import * as colors from '../../config/colors';

const EditProfileScreen = () => {
    const insets = useSafeAreaInsets();
    const [selectedGender, setSelectGender] = useState('');
    const [selectedRole, setSelectedRole] = useState('');

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Edit profile"/>
            <ScrollView style={styles.scrollContainer}>
                <EditProfileImage />
                <View style={styles.contentContainer}>
                    <TextInput label="Full name" placeholder="Enter name" mb={15}/>
                    <TextInput label="Date of birth" placeholder="dd/mm/yyyy" mb={15}/>
                    <TextInput inputMode="tel" label="Phone number" placeholder="+33 1 40 75 48 42" mb={15}/>
                    <TextInput inputMode="email" label="Email address" placeholder="Enter here" mb={15}/>
                    <DropDown selected={selectedGender} setSelected={setSelectGender} roles={['Men', 'Women']}/>
                    <DropDown selected={selectedRole} setSelected={setSelectedRole} roles={['Single', 'Both']} />
                    <Button title="Save" style={styles.button} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
    scrollContainer: {
        backgroundColor: colors.white,
    },
    contentContainer: {
        marginTop: 80,
        marginBottom: 30,
        marginHorizontal: 16,
    },
    button: {
        marginHorizontal: 0,
    },
});

export default EditProfileScreen;
