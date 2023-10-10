const User = require('./user-model');

exports.createUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw error;
  }
};

exports.findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ userEmail: email });
    return user;
  } catch (error) {
    throw error;
  }
};

exports.findAllUser = async () => {
  try {
    const user = await User.find();
    return user;
  } catch (error) {
    throw error;
  }
};

exports.updateUserByEmail = async (email, updatedUserData) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { userEmail: email },
      updatedUserData,
      { new: true }
    );
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

exports.deleteUserByEmail = async (email) => {
  try {
    const deletedUser = await User.findOneAndDelete({ userEmail: email });
    return deletedUser;
  } catch (error) {
    throw error;
  }
};
