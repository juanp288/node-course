const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

function getUserById(id, cb) {
  const user = users.find(function (user) {
    return user.id === id;
  });

  if (!user) {
    return cb(`User not found with id ${id}`);
  }

  return cb(null, user);
}

module.exports = {
  getUserById,
};
