# Utilizamos una imagen de Node.js versión 14 como base
FROM node:14-alpine

# Creamos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos necesarios para la instalación de dependencias
COPY package.json .
COPY package-lock.json .

# Instalamos las dependencias
RUN npm install

# Copiamos el resto de los archivos de la aplicación
COPY . .

# Compilamos la aplicación
RUN npm run build

# Exponemos el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]



