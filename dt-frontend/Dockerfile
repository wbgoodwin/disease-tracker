
FROM node:12.4.0
EXPOSE 3001

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
## Launch the wait tool and then your application
CMD ["npm", "start"]