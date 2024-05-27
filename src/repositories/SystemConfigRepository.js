const { SystemConfig } = require('../../models');

class SystemConfigRepository {
  async create(data) {
    return await SystemConfig.create(data);
  }

  async findAll() {
    return await SystemConfig.findAll();
  }

  async findOne(id) {
    return await SystemConfig.findByPk(id);
  }

  async findOneByName(name) {
    return await SystemConfig.findOne({ where: { name: name } });
  }

  async update(id, data) {
    const instance = await SystemConfig.findByPk(id);
    if (instance) {
      return await instance.update(data);
    }
    return null;
  }

  async delete(id) {
    const instance = await SystemConfig.findByPk(id);
    if (instance) {
      return await instance.destroy();
    }
    return null;
  }
}

module.exports = new SystemConfigRepository();
