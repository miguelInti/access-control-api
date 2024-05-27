const EstablishmentTypeRepository = require('../repositories/EstablishmentTypeRepository');

class EstablishmentTypeService {
  async create(data) {
    return await EstablishmentTypeRepository.create(data);
  }

  async findAll() {
    return await EstablishmentTypeRepository.findAll();
  }

  async findOne(id) {
    return await EstablishmentTypeRepository.findOne(id);
  }

  async update(id, data) {
    return await EstablishmentTypeRepository.update(id, data);
  }

  async delete(id) {
    return await EstablishmentTypeRepository.delete(id);
  }
}

module.exports = new EstablishmentTypeService();
