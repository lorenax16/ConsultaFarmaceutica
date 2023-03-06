FROM node:16.18
WORKDIR /api-Farmacia/src/api

COPY package* ./
RUN npm install

COPY . .
CMD [ "npm", "run", "dev" ] 
