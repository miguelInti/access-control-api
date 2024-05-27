const PropertyRepository = require('../repositories/PropertyRepository');

class PropertyService {
  async create(data) {
    return await PropertyRepository.create(data);
  }

  async findAll() {
    return await PropertyRepository.findAll();
  }

  async findOne(id) {
    return await PropertyRepository.findOne(id);
  }

  async update(id, data) {
    return await PropertyRepository.update(id, data);
  }

  async delete(id) {
    return await PropertyRepository.delete(id);
  }
}

module.exports = new PropertyService();
