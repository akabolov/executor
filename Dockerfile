FROM node:16.13.2
WORKDIR .
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
CMD ["npm", "start"]