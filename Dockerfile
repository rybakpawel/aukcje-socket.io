FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5010

CMD ["npm", "start"]