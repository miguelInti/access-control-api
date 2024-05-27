const PropertyTypeRepository = require('../repositories/PropertyTypeRepository');

class PropertyTypeService {
  async create(data) {
    return await PropertyTypeRepository.create(data);
  }

  async findAll() {
    return await PropertyTypeRepository.findAll();
  }

  async findOne(id) {
    return await PropertyTypeRepository.findOne(id);
  }

  async update(id, data) {
    return await PropertyTypeRepository.update(id, data);
  }

  async delete(id) {
    return await PropertyTypeRepository.delete(id);
  }
}

module.exports = new PropertyTypeService();
