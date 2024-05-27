const { User } = require('../../models');

class UserRepository {
  async create(data) {
    return await User.create(data);
  }

  async findAll() {
    return await User.findAll();
  }

  async findOne(id) {
    return await User.findByPk(id);
  }

  async update(id, data) {
    const instance = await User.findByPk(id);
    if (instance) {
      return await instance.update(data);
    }
    return null;
  }

  async delete(id) {
    const instance = await User.findByPk(id);
    if (instance) {
      return await instance.destroy();
    }
    return null;
  }
}

module.exports = new UserRepository();
