
const validateForm = (userData) => {
    if (userData.firstName.trim().length < 4 || userData.firstName.length > 50) {
      return "First name must be between 4 and 50 characters";
    }
  
    if (userData.lastName.trim().length < 4 || userData.lastName.length > 50) {
      return "Last name must be between 4 and 50 characters";
    }
  
    if (userData.age < 18 || userData.age > 150) {
      return "Age must be between 18 and 150";
    }
  
    const allowedGenders = ["male", "female", "others"];
    if (
      userData.gender &&
      !allowedGenders.includes(userData.gender.toLowerCase())
    ) {
      return "Gender must be: male, female, or others";
    }
  
    if (userData.skills.length > 10) {
      return "You can add maximum 10 skills";
    }
  
    return null; 
  };
  
export default validateForm