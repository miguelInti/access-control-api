const %%RepositoryName%% = require('../repositories/%%RepositoryName%%');

class %%ServiceName%% {
  async create(data) {
    return await %%RepositoryName%%.create(data);
  }

  async findAll() {
    return await %%RepositoryName%%.findAll();
  }

  async findOne(id) {
    return await %%RepositoryName%%.findOne(id);
  }

  async update(id, data) {
    return await %%RepositoryName%%.update(id, data);
  }

  async delete(id) {
    return await %%RepositoryName%%.delete(id);
  }
}

module.exports = new %%ServiceName%%();
