const { Property } = require('../../models');

class PropertyRepository {
  async create(data) {
    return await Property.create(data);
  }

  async findAll() {
    return await Property.findAll();
  }

  async findOne(id) {
    return await Property.findByPk(id);
  }

  async update(id, data) {
    const instance = await Property.findByPk(id);
    if (instance) {
      return await instance.update(data);
    }
    return null;
  }

  async delete(id) {
    const instance = await Property.findByPk(id);
    if (instance) {
      return await instance.destroy();
    }
    return null;
  }
}

module.exports = new PropertyRepository();
