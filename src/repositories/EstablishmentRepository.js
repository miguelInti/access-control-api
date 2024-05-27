const { Establishment } = require('../../models');

class EstablishmentRepository {
  async create(data) {
    return await Establishment.create(data);
  }

  async findAll() {
    return await Establishment.findAll();
  }

  async findOne(id) {
    return await Establishment.findByPk(id);
  }

  async update(id, data) {
    const instance = await Establishment.findByPk(id);
    if (instance) {
      return await instance.update(data);
    }
    return null;
  }

  async delete(id) {
    const instance = await Establishment.findByPk(id);
    if (instance) {
      return await instance.destroy();
    }
    return null;
  }
}

module.exports = new EstablishmentRepository();
