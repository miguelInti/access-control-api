const EstablishmentRepository = require('../repositories/EstablishmentRepository');

class EstablishmentService {
  async create(data) {
    return await EstablishmentRepository.create(data);
  }

  async findAll() {
    return await EstablishmentRepository.findAll();
  }

  async findOne(id) {
    return await EstablishmentRepository.findOne(id);
  }

  async update(id, data) {
    return await EstablishmentRepository.update(id, data);
  }

  async delete(id) {
    return await EstablishmentRepository.delete(id);
  }
}

module.exports = new EstablishmentService();
