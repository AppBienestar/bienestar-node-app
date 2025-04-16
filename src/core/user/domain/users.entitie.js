class User {
    constructor({ id, name, paternalSurname, maternalSurname, email, phone, isActive, birthDate, gender, lastLogin, role }) {
      this.id = id;
      this.name = name;
      this.paternalSurname = paternalSurname;
      this.maternalSurname = maternalSurname;
      this.email = email;
      this.phone = phone;
      this.isActive = isActive;
      this.birthDate = birthDate;
      this.gender = gender;
      this.lastLogin = lastLogin;
      this.role = role;
    }
  }
  
  module.exports = User;
  