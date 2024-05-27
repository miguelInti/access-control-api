const RolePermissionService = require('../services/RolePermissionService');

class RolePermissionController {
  async create(req, res) {
    const data = await RolePermissionService.create(req.body);
    res.status(201).json(data);
  }

  async findAll(req, res) {
    const data = await RolePermissionService.findAll();
    res.status(200).json(data);
  }

  async findOne(req, res) {
    const data = await RolePermissionService.findOne(req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  }

  async update(req, res) {
    const data = await RolePermissionService.update(req.params.id, req.body);
    res.status(200).json(data);
  }

  async delete(req, res) {
    await RolePermissionService.delete(req.params.id);
    res.status(204).end();
  }
}

module.exports = new RolePermissionController();
