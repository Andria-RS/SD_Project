# Documentação da API

## URL Base
```
http://localhost:8080
```

## Endpoints

### 1. Verificação da API funcional
- **URL:** `/`
- **Método:** `GET`
- **Descrição:** Retorna uma mensagem "API Funcional".
- **Resposta:**
  ```json
  {
    "message": "API Funcional !!"
  }
  ```

---

### 2. Criar Novo Jogo
- **URL:** `/Games`
- **Método:** `POST`
- **Descrição:** Cria um novo jogo na base de dados.
- **Corpo da Requisição:**
  ```json
  {
    "title": "Título do Jogo",
    "developers": "Nome das Empresas Desenvolvedoras",
    "price": 59.99
  }
  ```
- **Resposta:**
  - **Status 201:**
    ```json
    {
      "message": "New Games created",
      "gamesId": 1
    }
    ```
  - **Status 400:**
    ```json
    {
      "error": "One of the title, or developers, or priceis missing in the data"
    }
    ```
  - **Status 500:**
    ```json
    {
      "error": "some error has occured"
    }
    ```

---

### 3. Listar Todos os Jogos
- **URL:** `/Games`
- **Método:** `GET`
- **Descrição:** Retorna todos os jogos da base de dados.
- **Resposta:**
  - **Status 200:**
    ```json
    [
      {
        "id": 1,
        "title": "Título do Jogo",
        "developers": "Nome das Empresas Desenvolvedoras",
        "price": 59.99
      }
    ]
    ```
  - **Status 500:**
    ```json
    {
      "error": "failed"
    }
    ```

---

### 4. Atualizar Jogo
- **URL:** `/Games/:id`
- **Método:** `PUT`
- **Descrição:** Atualiza os detalhes de um jogo existente.
- **Parâmetros da Requisição:**
  - `id` (número): ID do jogo a ser atualizado.
- **Corpo da Requisição:**
  ```json
  {
    "title": "Novo Título do Jogo",
    "developers": "Novas Empresas Desenvolvedoras",
    "price": 69.99
  }
  ```
- **Resposta:**
  - **Status 200:**
    ```json
    {
      "id": 1,
      "title": "Novo Título do Jogo",
      "developers": "Novas Empresas Desenvolvedoras",
      "price": 69.99
    }
    ```
  - **Status 400:**
    ```json
    {
      "error": "provide a failed (title, developers or price)"
    }
    ```
  - **Status 404:**
    ```json
    {
      "error": "Cannot find anything"
    }
    ```
  - **Status 500:**
    ```json
    {
      "error": "Some error has occured failed"
    }
    ```

---

### 5. Deletar Jogo
- **URL:** `/Games/:id`
- **Método:** `DELETE`
- **Descrição:** Elimina um jogo pelo ID.
- **Parâmetros da Requisição:**
  - `id` (número): ID do jogo a ser eliminado.
- **Resposta:**
  - **Status 200:**
    ```json
    {
      "id": 1,
      "title": "Título do Jogo",
      "developers": "Novas Empresas Desenvolvedoras",
      "price": 59.99
    }
    ```
  - **Status 404:**
    ```json
    {
      "error": "we have not found the games"
    }
    ```
  - **Status 500:**
    ```json
    {
      "error": "some error has occured"
    }
    ```

