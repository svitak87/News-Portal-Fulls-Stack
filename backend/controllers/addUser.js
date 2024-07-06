const { User } = require("../db/db");
const bcrypt = require("bcrypt");

const addUser = async (userData) => {
  const { name, email, password } = userData;
  try {
    const existingUser = await User.findOne({ where: { email: email } });
    if (existingUser) {
      throw new Error("user already exists");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name: name,
        email: email,
        password: hashedPassword,
      });
      return newUser;
    }
  } catch (error) {
    console.error("Error in addUser:", error);
    throw error;
  }
};

module.exports = addUser;
