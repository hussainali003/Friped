import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { Button, DropDown, Header, TextInput } from '../../common';

import CoverPhotoSvg from '../../assets/images/cover_photo.svg';
import CoverPencilSvg from '../../assets/images/cover_pencil.svg';

import * as colors from '../../config/colors';

const ProfileScreen = () => {
    const insets = useSafeAreaInsets();
    const [selectedGender, setSelectGender] = useState('');
    const [selectedRole, setSelectedRole] = useState('');

    return (
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Header title="Profile"/>
            <View style={styles.coverPhotoContainer}>
                <CoverPhotoSvg />
                <TouchableOpacity style={styles.coverPencil}>
                    <CoverPencilSvg />
                </TouchableOpacity>
                <View style={styles.editProfileImageContainer}>
                    <CoverPhotoSvg />
                    <TouchableOpacity style={styles.editCoverPeniclImageContainer}>
                        <CoverPencilSvg />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContentContainer} style={styles.scrollContainer}>
                <TextInput label="Full name" placeholder="Enter name" mb={15}/>
                <TextInput label="Date of birth" placeholder="dd/mm/yyyy" mb={15}/>
                <TextInput inputMode="tel" label="Phone number" placeholder="+33 1 40 75 48 42" mb={15}/>
                <TextInput inputMode="email" label="Email address" placeholder="Enter here" mb={15}/>
                <DropDown selected={selectedGender} setSelected={setSelectGender} roles={['Men', 'Women']}/>
                <DropDown selected={selectedRole} setSelected={setSelectedRole} roles={['Single', 'Both']} />
                <Button title="Save" style={styles.button} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_two,
    },
    coverPhotoContainer: {
        position: 'relative',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 30,
        backgroundColor: colors.secondary,
    },
    coverPencil: {
        paddingHorizontal: 6,
        alignSelf: 'flex-end',
    },
    editProfileImageContainer: {
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        marginHorizontal: 16,
        marginBottom: -40,
        alignSelf: 'flex-start',
        alignItems: 'center',
    },
    editCoverPeniclImageContainer: {
        marginTop: -12,
    },
    scrollContainer: {
        backgroundColor: colors.white,
    },
    scrollContentContainer: {
        paddingTop: 70,
        paddingBottom: 37,
        paddingHorizontal: 16,
    },
    button: {
        marginHorizontal: 0,
    },
});

export default ProfileScreen;
