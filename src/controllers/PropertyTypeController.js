const PropertyTypeService = require('../services/PropertyTypeService');

class PropertyTypeController {
  async create(req, res) {
    const data = await PropertyTypeService.create(req.body);
    res.status(201).json(data);
  }

  async findAll(req, res) {
    const data = await PropertyTypeService.findAll();
    res.status(200).json(data);
  }

  async findOne(req, res) {
    const data = await PropertyTypeService.findOne(req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  }

  async update(req, res) {
    const data = await PropertyTypeService.update(req.params.id, req.body);
    res.status(200).json(data);
  }

  async delete(req, res) {
    await PropertyTypeService.delete(req.params.id);
    res.status(204).end();
  }
}

module.exports = new PropertyTypeController();
