const { PropertyType } = require('../../models');

class PropertyTypeRepository {
  async create(data) {
    return await PropertyType.create(data);
  }

  async findAll() {
    return await PropertyType.findAll();
  }

  async findOne(id) {
    return await PropertyType.findByPk(id);
  }

  async update(id, data) {
    const instance = await PropertyType.findByPk(id);
    if (instance) {
      return await instance.update(data);
    }
    return null;
  }

  async delete(id) {
    const instance = await PropertyType.findByPk(id);
    if (instance) {
      return await instance.destroy();
    }
    return null;
  }
}

module.exports = new PropertyTypeRepository();
