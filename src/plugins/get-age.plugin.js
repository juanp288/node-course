// Adapter
const getAge = (birthdate) => {
  if (!birthdate) return new Error("birthdate is required");

  return new Date().getFullYear() - new Date(birthdate).getFullYear();
};

module.exports = { getAge };
