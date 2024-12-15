const PhoneInput = ({ phoneNumber, setPhoneNumber }) => {
  // Function to format the phone number
  const formatPhoneNumber = (value) => {
    // Remove all non-numeric characters
    const cleaned = value.replace(/\D/g, "");

    // Format as (1) (555) 555-5555
    if (cleaned.length <= 1) {
      return cleaned; // Just the country code
    }
    if (cleaned.length <= 4) {
      return `(${cleaned.slice(0, 1)}) ${cleaned.slice(1)}`;
    }
    if (cleaned.length <= 7) {
      return `(${cleaned.slice(0, 1)}) ${cleaned.slice(1, 4)}-${cleaned.slice(
        4,
        7
      )}`;
    }
    return `(${cleaned.slice(0, 1)}) ${cleaned.slice(1, 4)}-${cleaned.slice(
      4,
      7
    )}-${cleaned.slice(7, 11)}`;
  };

  const handleChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <input
      id="phoneNumber"
      type="text"
      value={phoneNumber}
      onChange={handleChange}
      placeholder="1 (555) 555-5555"
    />
  );
};

export default PhoneInput;
