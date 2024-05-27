const EstablishmentTypeService = require('../services/EstablishmentTypeService');

class EstablishmentTypeController {
  async create(req, res) {
    const data = await EstablishmentTypeService.create(req.body);
    res.status(201).json(data);
  }

  async findAll(req, res) {
    const data = await EstablishmentTypeService.findAll();
    res.status(200).json(data);
  }

  async findOne(req, res) {
    const data = await EstablishmentTypeService.findOne(req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  }

  async update(req, res) {
    const data = await EstablishmentTypeService.update(req.params.id, req.body);
    res.status(200).json(data);
  }

  async delete(req, res) {
    await EstablishmentTypeService.delete(req.params.id);
    res.status(204).end();
  }
}

module.exports = new EstablishmentTypeController();
