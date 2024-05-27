const { Permission } = require('../../models');

class PermissionRepository {
  async create(data) {
    return await Permission.create(data);
  }

  async findAll() {
    return await Permission.findAll();
  }

  async findOne(id) {
    return await Permission.findByPk(id);
  }

  async update(id, data) {
    const instance = await Permission.findByPk(id);
    if (instance) {
      return await instance.update(data);
    }
    return null;
  }

  async delete(id) {
    const instance = await Permission.findByPk(id);
    if (instance) {
      return await instance.destroy();
    }
    return null;
  }
}

module.exports = new PermissionRepository();
