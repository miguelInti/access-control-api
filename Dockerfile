FROM 814231045142.dkr.ecr.us-east-1.amazonaws.com/inti-tools-node:alpine3.19
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev
# Bundle app source
COPY . .
EXPOSE 3020
CMD [ "node", "src/server.js" ]