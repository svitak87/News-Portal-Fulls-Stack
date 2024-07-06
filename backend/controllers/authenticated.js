const { User } = require("../db/db");

const getUserById = async (id) => {
  try {
    const user = await User.findOne({ where: { id: id } });
    if (!user) {
      throw new Error('User not found');
    } else {
      return user;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = getUserById;
