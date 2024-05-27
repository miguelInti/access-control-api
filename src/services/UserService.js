const UserRepository = require('../repositories/UserRepository');

class UserService {
  async create(data) {
    return await UserRepository.create(data);
  }

  async findAll() {
    return await UserRepository.findAll();
  }

  async findOne(id) {
    return await UserRepository.findOne(id);
  }

  async update(id, data) {
    return await UserRepository.update(id, data);
  }

  async delete(id) {
    return await UserRepository.delete(id);
  }
}

module.exports = new UserService();
