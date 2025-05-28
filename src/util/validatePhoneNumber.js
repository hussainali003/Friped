function validatePhoneNumber(input) {
  // Remove leading/trailing whitespace
  const trimmed = input.trim();

  // Check if it contains only digits
  const onlyDigits = /^\d{10}$/.test(trimmed);

  if (!onlyDigits) {
    if (/\D/.test(trimmed)) {
      return 'Phone number should not contain spaces or special characters';
    }
    return 'Phone number must be exactly 10 digits';
  }

  return null; // null means no error
}

export default validatePhoneNumber;
