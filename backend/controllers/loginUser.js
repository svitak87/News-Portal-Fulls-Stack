const bcrypt = require("bcrypt");
const { User } = require("../db/db");

const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      throw new Error("Email doesn't exist");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Invalid credentials");
    }
    
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = loginUser;

