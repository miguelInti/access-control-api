const UserService = require('../services/UserService');
const {SYSTEM_CONFIGS} = require('../constants/constant');
const SystemConfigService = require('../services/SystemConfigService');
class UserController {
  async create(req, res) {
    const data = await UserService.create(req.body);
    res.status(201).json(data);
  }

  async createAdmin(req, res) {

    const adminRoId = SystemConfigService.findOneByName(SYSTEM_CONFIGS.ADMIN_ROLE_ID_CONFIG_NAME);
    
    if(!adminRoId.value){
      res.status(404).json({ message: 'Rol administrador no configurado.' });
    }

    req.body.role_id = adminRoId.value;

    const data = await UserService.create(req.body);
    
    res.status(201).json(data);
  }

  async findAll(req, res) {
    const data = await UserService.findAll();
    res.status(200).json(data);
  }

  async findOne(req, res) {
    const data = await UserService.findOne(req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  }

  async update(req, res) {
    const data = await UserService.update(req.params.id, req.body);
    res.status(200).json(data);
  }

  async delete(req, res) {
    await UserService.delete(req.params.id);
    res.status(204).end();
  }
}


module.exports = new UserController();
