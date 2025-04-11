import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const authServices = {
  register: async (username, email, password, role = 'user') => {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw new Error('Username already taken');
    }
    const user = new User({ username, email, password, role });
    await user.save();
    
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, user: { id: user._id, username: user.username, role: user.role } };
  },

  login: async (username, password) => {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, user: { id: user._id, username: user.username, role: user.role } };
  }
};

export default authServices;