FROM node:18-bullseye

WORKDIR /app

COPY package.json package-lock.json ./
COPY yarn.lock ./

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
COPY . .

CMD ["npm", "run", "dev"]