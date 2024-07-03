const isValidPhoneNumber = (number) => {
  const phoneRegex = /^[1-9]\d{1,14}$/;
  return phoneRegex.test(number);
};

export default isValidPhoneNumber;
