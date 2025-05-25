import { useState } from 'react';

import AddNewProductTextInput from '../components/AddNewProductTextInput';
import AddNewProductDropDown from '../components/AddNewProductDropDown';

const roles = ['Cultural Events', 'Formal Ceremony', 'Wedding'];

const NewProductDetailSection = () => {
    const [selectedRole, setSelectedRole] = useState('');

    return (
        <>
            <AddNewProductTextInput placeholder="Type here....." label="Product name" />
            <AddNewProductDropDown  label="Categories" selected={selectedRole} setSelected={setSelectedRole} roles={roles} />
            <AddNewProductTextInput placeholder="Type here....." label="Size" />
            <AddNewProductTextInput placeholder="Type here....." label="Fabric" />
            <AddNewProductTextInput placeholder="Type here....." label="Color" />
            <AddNewProductTextInput placeholder="Type here....." label="Condition" />
            <AddNewProductTextInput placeholder="Type here....." label="Security deposits" />
            <AddNewProductTextInput placeholder="Type here....." label="Daily rental price" />
        </>
    );
};

export default NewProductDetailSection;
