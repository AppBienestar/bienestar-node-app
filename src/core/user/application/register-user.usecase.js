class RegisterUserUseCase {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async execute(userData) {
      const existing = await this.userRepository.findByEmail(userData.email);
      if (existing) {
        throw new Error("El correo ya está registrado.");
      }
      return await this.userRepository.create(userData);
    }
  }
  
  module.exports = RegisterUserUseCase;
  