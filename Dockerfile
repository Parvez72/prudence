FROM node:alpine
RUN npm install -g pm2
RUN mkdir /app
WORKDIR /app/
COPY . /app
RUN npm install
EXPOSE 3000
CMD ["pm2-runtime", "bin/www"]
