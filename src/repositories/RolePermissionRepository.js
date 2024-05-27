const { RolePermission } = require('../../models');

class RolePermissionRepository {
  async create(data) {
    return await RolePermission.create(data);
  }

  async findAll() {
    return await RolePermission.findAll();
  }

  async findOne(id) {
    return await RolePermission.findByPk(id);
  }

  async update(id, data) {
    const instance = await RolePermission.findByPk(id);
    if (instance) {
      return await instance.update(data);
    }
    return null;
  }

  async delete(id) {
    const instance = await RolePermission.findByPk(id);
    if (instance) {
      return await instance.destroy();
    }
    return null;
  }
}

module.exports = new RolePermissionRepository();
