const { CommonArea } = require('../../models');

class CommonAreaRepository {
  async create(data) {
    return await CommonArea.create(data);
  }

  async findAll() {
    return await CommonArea.findAll();
  }

  async findOne(id) {
    return await CommonArea.findByPk(id);
  }

  async update(id, data) {
    const instance = await CommonArea.findByPk(id);
    if (instance) {
      return await instance.update(data);
    }
    return null;
  }

  async delete(id) {
    const instance = await CommonArea.findByPk(id);
    if (instance) {
      return await instance.destroy();
    }
    return null;
  }
}

module.exports = new CommonAreaRepository();
