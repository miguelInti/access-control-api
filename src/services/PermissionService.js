const PermissionRepository = require('../repositories/PermissionRepository');

class PermissionService {
  async create(data) {
    return await PermissionRepository.create(data);
  }

  async findAll() {
    return await PermissionRepository.findAll();
  }

  async findOne(id) {
    return await PermissionRepository.findOne(id);
  }

  async update(id, data) {
    return await PermissionRepository.update(id, data);
  }

  async delete(id) {
    return await PermissionRepository.delete(id);
  }
}

module.exports = new PermissionService();
