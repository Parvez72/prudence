FROM node
RUN npm install -g pm2
RUN mkdir /app
WORKDIR /app
RUN git clone https://github.com/Parvez72/prudence.git /app
RUN npm install
EXPOSE 3000
CMD ["pm2-runtime", "bin/www"]
