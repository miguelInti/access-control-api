const RolePermissionRepository = require('../repositories/RolePermissionRepository');

class RolePermissionService {
  async create(data) {
    return await RolePermissionRepository.create(data);
  }

  async findAll() {
    return await RolePermissionRepository.findAll();
  }

  async findOne(id) {
    return await RolePermissionRepository.findOne(id);
  }

  async update(id, data) {
    return await RolePermissionRepository.update(id, data);
  }

  async delete(id) {
    return await RolePermissionRepository.delete(id);
  }
}

module.exports = new RolePermissionService();
