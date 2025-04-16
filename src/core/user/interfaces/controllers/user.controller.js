const RegisterUserUseCase = require('../../application/use-cases/register-user.usecase');
const userRepository = require('../../domain/user.repository.js');

const registerUser = async (req, res) => {
  try {
    const useCase = new RegisterUserUseCase(userRepository);
    const user = await useCase.execute(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  registerUser
};
