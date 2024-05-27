const RoleRepository = require('../repositories/RoleRepository');

class RoleService {
  async create(data) {
    return await RoleRepository.create(data);
  }

  async findAll() {
    return await RoleRepository.findAll();
  }

  async findOne(id) {
    return await RoleRepository.findOne(id);
  }

  async update(id, data) {
    return await RoleRepository.update(id, data);
  }

  async delete(id) {
    return await RoleRepository.delete(id);
  }
}

module.exports = new RoleService();
