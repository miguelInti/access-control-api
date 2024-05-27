const PermissionService = require('../services/PermissionService');

class PermissionController {
  async create(req, res) {
    const data = await PermissionService.create(req.body);
    res.status(201).json(data);
  }

  async findAll(req, res) {
    const data = await PermissionService.findAll();
    res.status(200).json(data);
  }

  async findOne(req, res) {
    const data = await PermissionService.findOne(req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  }

  async update(req, res) {
    const data = await PermissionService.update(req.params.id, req.body);
    res.status(200).json(data);
  }

  async delete(req, res) {
    await PermissionService.delete(req.params.id);
    res.status(204).end();
  }
}

module.exports = new PermissionController();
