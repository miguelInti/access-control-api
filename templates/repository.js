const { %%ModelName%% } = require('../../models');

class %%RepositoryName%% {
  async create(data) {
    return await %%ModelName%%.create(data);
  }

  async findAll() {
    return await %%ModelName%%.findAll();
  }

  async findOne(id) {
    return await %%ModelName%%.findByPk(id);
  }

  async update(id, data) {
    const instance = await %%ModelName%%.findByPk(id);
    if (instance) {
      return await instance.update(data);
    }
    return null;
  }

  async delete(id) {
    const instance = await %%ModelName%%.findByPk(id);
    if (instance) {
      return await instance.destroy();
    }
    return null;
  }
}

module.exports = new %%RepositoryName%%();
