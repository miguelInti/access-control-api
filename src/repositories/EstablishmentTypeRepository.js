const { EstablishmentType } = require('../../models');

class EstablishmentTypeRepository {
  async create(data) {
    return await EstablishmentType.create(data);
  }

  async findAll() {
    return await EstablishmentType.findAll();
  }

  async findOne(id) {
    return await EstablishmentType.findByPk(id);
  }

  async update(id, data) {
    const instance = await EstablishmentType.findByPk(id);
    if (instance) {
      return await instance.update(data);
    }
    return null;
  }

  async delete(id) {
    const instance = await EstablishmentType.findByPk(id);
    if (instance) {
      return await instance.destroy();
    }
    return null;
  }
}

module.exports = new EstablishmentTypeRepository();
