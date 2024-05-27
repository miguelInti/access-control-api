const SystemConfigRepository = require('../repositories/SystemConfigRepository');

class SystemConfigService {
  async create(data) {
    return await SystemConfigRepository.create(data);
  }

  async findAll() {
    return await SystemConfigRepository.findAll();
  }

  async findOne(id) {
    return await SystemConfigRepository.findOne(id);
  }

  async findOneByName(name) {
    return await SystemConfigRepository.findOneByName(id);
  }

  async update(id, data) {
    return await SystemConfigRepository.update(id, data);
  }

  async delete(id) {
    return await SystemConfigRepository.delete(id);
  }

}

module.exports = new SystemConfigService();
