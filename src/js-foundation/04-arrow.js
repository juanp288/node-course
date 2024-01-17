const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

const getUserById = (id, cb) => {
  const user = users.find((user) => user.id === id);
  user ? cb(null, user) : cb(`User not found with id ${id}`);
};

module.exports = {
  getUserById,
};
