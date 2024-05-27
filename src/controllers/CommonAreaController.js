const CommonAreaService = require('../services/CommonAreaService');

class CommonAreaController {
  async create(req, res) {
    const data = await CommonAreaService.create(req.body);
    res.status(201).json(data);
  }

  async findAll(req, res) {
    const data = await CommonAreaService.findAll();
    res.status(200).json(data);
  }

  async findOne(req, res) {
    const data = await CommonAreaService.findOne(req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  }

  async update(req, res) {
    const data = await CommonAreaService.update(req.params.id, req.body);
    res.status(200).json(data);
  }

  async delete(req, res) {
    await CommonAreaService.delete(req.params.id);
    res.status(204).end();
  }
}

module.exports = new CommonAreaController();
