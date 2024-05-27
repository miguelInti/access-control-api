const { Role } = require('../../models');

class RoleRepository {
  async create(data) {
    console.log('Data: ', data);
    return await Role.create(data);
  }

  async findAll() {
    return await Role.findAll();
  }

  async findOne(id) {
    return await Role.findByPk(id);
  }

  async update(id, data) {
    const instance = await Role.findByPk(id);
    if (instance) {
      return await instance.update(data);
    }
    return null;
  }

  async delete(id) {
    const instance = await Role.findByPk(id);
    if (instance) {
      return await instance.destroy();
    }
    return null;
  }
}

module.exports = new RoleRepository();
