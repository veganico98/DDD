# Usa Node.js 20
FROM node:20

# Define diretório de trabalho
WORKDIR /usr/src/app

# Instala Nest CLI globalmente
RUN npm install -g @nestjs/cli

# Copia package.json e package-lock.json para instalar dependências
COPY app/package*.json ./app/

# Define diretório do projeto
WORKDIR /usr/src/app/app

# Atualiza os pacotes
RUN npm install

# Expõe a porta do NestJS
EXPOSE 3000

# Inicia o servidor em modo desenvolvimento
CMD ["yarn", "start:dev"]
