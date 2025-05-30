import { useState } from 'react';
import DatePicker from 'react-native-date-picker';

import { Text, TouchableOpacity, View } from '../../../common';

import formatDate from '../../../util/FormatDate';
import { validateDate } from '../../../util/validateForm';

const EditProfileDatePicker = ({date, setDate, errorDate, setErrorDate}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChangeModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <View rowGap={8} mb={errorDate ? 4 : 15}>
                <Text size={14}>Date of birth</Text>
                <TouchableOpacity onPress={handleChangeModal} flex={1} pv={12} ph={22} borderWidth={1} borderRadius={10} borderColor="#8C8C8C">
                    <Text size={16} color="#808080">{date !== null ? formatDate(date) : 'dd/mm/yyyy'}</Text>
                </TouchableOpacity>
            </View>
            <DatePicker
                modal
                open={isModalOpen}
                date={date !== null ? date : new Date()}
                mode="date"
                onConfirm={(d) => {
                    setErrorDate(validateDate(d));
                    setIsModalOpen(false);
                    setDate(d);
                }}
                onCancel={() => {
                    setIsModalOpen(false);
                }}
            />
        </>
    );
};

export default EditProfileDatePicker;
