FROM node:12.4.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm run build-ts

COPY . .

EXPOSE 4000

## Launch the wait tool and then your application
CMD ["npm", "start"]