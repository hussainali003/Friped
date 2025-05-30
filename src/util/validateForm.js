// Full Name
export const validateFullName = (fullname) => {
  let error = '';
  if (!fullname?.trim()) {
    error = 'Full name is required.';
  } else if (fullname?.trim().length < 3) {
    error = 'Full name must be at least 3 characters.';
  } else if (!/^[A-Za-z\s]+$/.test(fullname)) {
    error = 'Full name must contain only letters and spaces.';
  }

  return error;
};

// Date of Birth
export const validateDate = (date) => {
  let error = '';
  if (!date?.trim()) {
    error = 'Date of birth is required.';
  } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(date)) {
    error = 'Date of birth must be in format DD/MM/YYYY.';
  }

  return error;
};

// Phone Number
export const validatePhoneNumber = (phoneNumber) => {
  let error = '';

  if (!phoneNumber?.trim()) {
    error = 'Phone number is required.';
  } else if (!/^\d{12}$/.test(phoneNumber)) {
    error = 'Phone number must be 12 digits with country code (e.g. 923001234567).';
  } else if (!/^92\d{10}$/.test(phoneNumber)) {
    error = 'Phone number must start with 92 (Pakistan country code).';
  }

  return error;
};

// Email
export const validateEmail = (email) => {
  let error = '';

  if (!email?.trim()) {
    error = 'Email is required.';
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    error = 'Invalid email format.';
  }

  return error;
};

// Gender
export const validateGender = (gender) => {
  let error = '';

  if (!gender) {
    error = 'Please select gender.';
  }

  return error;
};


