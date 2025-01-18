# Use a imagem oficial do Node.js
FROM node:18

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos de dependências para o container
COPY . /app
RUN ls

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos para o container
COPY . .

# Exponha a porta 8080 para acessar a aplicação
EXPOSE 8080

# Comando para iniciar a aplicação
CMD [ "node", "index.js" ]
