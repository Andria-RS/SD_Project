# Nome do Projeto

Este projeto é uma aplicação distribuída que implementa uma API RESTful utilizando os conceitos fundamentais de sistemas distribuídos. O sistema foi projetado para ser executado em containers Docker e está documentado para facilitar seu uso.

---

## Informações Acadêmicas

- **Unidade Curricular**: Serviços Distribuídos
- **Professor**: Wenderson Wanzeller
- **Aluno**: Andria Carina Rodrigues Silva
- **Matrícula**: 32177
- **Ano Letivo**: 2024/2025
- **Instituição de Ensino**: Instituto Politécnico de Viana do Castelo

---

## Funcionalidades

- API RESTful com suporte aos métodos HTTP: GET, POST, PUT, DELETE.
- Versionamento do código no GitHub com branches para development e production.
- Imagem Docker publicada no Docker Hub.
- Documentação da API no arquivo API.md.

---

## Requisitos

Para executar este sistema, você precisará dos seguintes itens instalados:

- Node.js
- Docker (versão atualizada).
- Git.
- Insomnia (opcional, para testar as rotas da API).

---

## Como Executar

### Passo 1: Clonar o Repositório

Execute o comando abaixo para clonar o repositório do GitHub:
git clone https://github.com/Andria-RS/SD_Project

Acesse o diretório do projeto:
cd SD_Project

---

### Passo 2: Executar a Aplicação com Docker

Certifique-se de que o Docker está em execução e utilize o comando abaixo para construir a aplicação:
docker-compose up --build

Certifique-se de que o Docker está em execução e utilize o comando abaixo para executar a aplicação:
docker-compose up

Isso iniciará a aplicação e ela estará disponível no endereço: http://localhost:8080.

---

### Passo 3: Testar as Rotas da API

A API pode ser testada utilizando ferramentas como o Insomnia. Todas as rotas e detalhes de requisição estão documentados no arquivo API.md. Além disso, você pode importar o arquivo de coleção do Postman incluído no repositório para facilitar os testes.

---

## Imagem Docker

A imagem Docker da aplicação foi publicada no Docker Hub e pode ser baixada diretamente com o comando:
docker pull <seu-username>/<nome-da-imagem>

---

## Estrutura do Repositório

- API.md: Documentação detalhada das rotas da API.
- docker-compose.yml: Configuração para executar a aplicação em containers Docker.
- index.js: Código-fonte da aplicação.

---
