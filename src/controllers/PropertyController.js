const PropertyService = require('../services/PropertyService');

class PropertyController {
  async create(req, res) {
    const data = await PropertyService.create(req.body);
    res.status(201).json(data);
  }

  async findAll(req, res) {
    const data = await PropertyService.findAll();
    res.status(200).json(data);
  }

  async findOne(req, res) {
    const data = await PropertyService.findOne(req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  }

  async update(req, res) {
    const data = await PropertyService.update(req.params.id, req.body);
    res.status(200).json(data);
  }

  async delete(req, res) {
    await PropertyService.delete(req.params.id);
    res.status(204).end();
  }
}

module.exports = new PropertyController();
