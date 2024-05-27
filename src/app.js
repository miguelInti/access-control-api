const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { json, urlencoded } = express;
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

const app = express();

app.use(cors());
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(limiter);

// Ruta básica de salud para verificar el funcionamiento del servidor
app.get('/health', (req, res) => {
  res.status(200).send({ message: 'Server is running!' });
});

// Import routes
const CommonAreaRoutes = require('./routes/CommonAreaRoutes');
const SystemConfigRoutes = require('./routes/SystemConfigRoutes');
const propertyRoutes = require('./routes/PropertyRoutes');
const establishmentTypeRoutes = require('./routes/EstablishmentTypeRoutes');
const propertyTypeRoutes = require('./routes/PropertyTypeRoutes');
const establishmentRoutes = require('./routes/EstablishmentRoutes');
const rolePermissionRoutes = require('./routes/RolePermissionRoutes');
const PermissionRoutes = require('./routes/PermissionRoutes');
const RoleRoutes = require('./routes/RoleRoutes');
const AuthRoutes = require('../src/routes/AuthRoutes');
const UserRoutes = require('../src/routes/UserRoutes');

// Use routes
app.use('/api/CommonAreas', CommonAreaRoutes);
app.use('/api/SystemConfigs', SystemConfigRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/establishmentTypes', establishmentTypeRoutes);
app.use('/api/propertyTypes', propertyTypeRoutes);
app.use('/api/establishments', establishmentRoutes);
app.use('/api/rolePermissions', rolePermissionRoutes);
app.use('/api/permissions', PermissionRoutes);
app.use('/api/roles', RoleRoutes);
app.use('/api/Auth', AuthRoutes);
app.use('/api/User', UserRoutes);

app.use((req, res, next) => {
  res.status(404).send({ error: 'Not Found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send({ error: err.message });
});

module.exports = app;
