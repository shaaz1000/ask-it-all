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

export const calculateTotalExperience = (workExperience) => {
  let totalExperienceInYears = 0;

  workExperience?.forEach((job) => {
    const fromDate = new Date(job?.designationHistory[0]?.fromDate);
    const toDate = new Date(
      job?.designationHistory[job?.designationHistory?.length - 1].toDate ||
        new Date()
    );

    const diffTime = Math.abs(toDate - fromDate);
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365); // Convert milliseconds to years

    totalExperienceInYears += diffYears;
  });

  return totalExperienceInYears.toFixed(1); // Return total experience rounded to 1 decimal place
};
