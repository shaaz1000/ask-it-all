export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateContactNumber = (contact) => {
  const contactRegex = /^\d{10}$/;
  return contactRegex.test(contact);
};
