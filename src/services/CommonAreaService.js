const CommonAreaRepository = require('../repositories/CommonAreaRepository');

class CommonAreaService {
  async create(data) {
    return await CommonAreaRepository.create(data);
  }

  async findAll() {
    return await CommonAreaRepository.findAll();
  }

  async findOne(id) {
    return await CommonAreaRepository.findOne(id);
  }

  async update(id, data) {
    return await CommonAreaRepository.update(id, data);
  }

  async delete(id) {
    return await CommonAreaRepository.delete(id);
  }
}

module.exports = new CommonAreaService();
