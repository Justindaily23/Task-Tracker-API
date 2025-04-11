import authServices from "../services/authService.js";

export const userRegister = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        //|| typeof password !== 'string' || password.trim() === ''
        if (!username || !password ) {
          return res.status(400).json({ message: 'Username and password are required' });
        }
        const { token, user } = await authServices.register(username, email, password);
        res.status(201).json({ token, user });
      } catch (error) {
        res.status(400).json({ message: error.message});
      }

};

export const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
          return res.status(400).json({ message: 'Username and password are required' });
        }
        const { token, user } = await authServices.login(username, password);
        res.status(200).json({ token, user });
      } catch (error) {
        res.status(401).json({ message: error.message });
      }
};