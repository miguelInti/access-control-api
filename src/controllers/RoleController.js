const RoleService = require('../services/RoleService');

class RoleController {
  async create(req, res) {
    const data = await RoleService.create(req.body);
    res.status(201).json(data);
  }

  async findAll(req, res) {
    const data = await RoleService.findAll();
    res.status(200).json(data);
  }

  async findOne(req, res) {
    const data = await RoleService.findOne(req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  }

  async update(req, res) {
    const data = await RoleService.update(req.params.id, req.body);
    res.status(200).json(data);
  }

  async delete(req, res) {
    await RoleService.delete(req.params.id);
    res.status(204).end();
  }
}

module.exports = new RoleController();
