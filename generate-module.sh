#!/bin/bash

# Verificar que los argumentos fueron proporcionados
if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Error: Nombre del módulo o su forma plural no proporcionados."
  echo "Uso: ./generate-module.sh <ModuleName> <ModuleNamePlural>"
  exit 1
fi

MODULE_NAME=$1
MODULE_NAME_PLURAL=$2

# Convertir el nombre del módulo a PascalCase
MODULE_NAME_PASCAL=$(echo "$MODULE_NAME" | sed -r 's/(^|_)([a-z])/\U\2/g')

# Definir nombres de clases
SERVICE_NAME="${MODULE_NAME_PASCAL}Service"
REPOSITORY_NAME="${MODULE_NAME_PASCAL}Repository"
CONTROLLER_NAME="${MODULE_NAME_PASCAL}Controller"
ROUTES_NAME="${MODULE_NAME_PASCAL}Routes"
VALIDATION_MIDDLEWARE_NAME="${MODULE_NAME_PASCAL}ValidationMiddleware"

# Crear directorios si no existen
mkdir -p src/controllers
mkdir -p src/services
mkdir -p src/repositories
mkdir -p src/routes
mkdir -p src/middlewares

# Crear archivos basados en las plantillas y personalizarlos
for file in controller service repository routes validationMiddleware; do
  TEMPLATE_FILE="templates/${file}.js"
  TARGET_DIR="src/${file}s"

  # Corregir directorio para casos específicos
  case "$file" in
    repository)
      TARGET_DIR="src/repositories"
      ;;
    routes)
      TARGET_DIR="src/routes"
      ;;
    validationMiddleware)
      TARGET_DIR="src/middlewares"
      ;;
  esac

  TARGET_FILE="${TARGET_DIR}/${MODULE_NAME_PASCAL}${file^}.js"

  sed -e "s/%%ModelName%%/${MODULE_NAME_PASCAL}/g" \
      -e "s/%%ServiceName%%/${SERVICE_NAME}/g" \
      -e "s/%%RepositoryName%%/${REPOSITORY_NAME}/g" \
      -e "s/%%ControllerName%%/${CONTROLLER_NAME}/g" \
      -e "s/%%RoutesName%%/${ROUTES_NAME}/g" \
      -e "s/%%ValidationMiddlewareName%%/${VALIDATION_MIDDLEWARE_NAME}/g" \
      "$TEMPLATE_FILE" > "$TARGET_FILE"
done

# Crear el modelo con Sequelize CLI
npx sequelize-cli model:generate --name $MODULE_NAME --attributes name:string,description:string --underscored

# Agregar la ruta al app.js
APP_JS_PATH="src/app.js"
ROUTE_IMPORT_STATEMENT="const ${MODULE_NAME}Routes = require('./routes/${MODULE_NAME_PASCAL}Routes');"
ROUTE_USE_STATEMENT="app.use('/api/${MODULE_NAME_PLURAL}', ${MODULE_NAME}Routes);"

# Verificar si la declaración de importación ya existe
if ! grep -q "$ROUTE_IMPORT_STATEMENT" "$APP_JS_PATH"; then
  sed -i "/^\/\/ Import routes/a $ROUTE_IMPORT_STATEMENT" "$APP_JS_PATH"
fi

# Verificar si la declaración de uso ya existe
if ! grep -q "$ROUTE_USE_STATEMENT" "$APP_JS_PATH"; then
  sed -i "/^\/\/ Use routes/a $ROUTE_USE_STATEMENT" "$APP_JS_PATH"
fi

echo "Módulo ${MODULE_NAME} creado exitosamente con los archivos necesarios y la ruta agregada a app.js."
