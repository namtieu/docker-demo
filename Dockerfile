FROM node:18-alpine

WORKDIR /app

# copy package trước để tận dụng cache
COPY package*.json ./
RUN npm install --production

# copy source code
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]