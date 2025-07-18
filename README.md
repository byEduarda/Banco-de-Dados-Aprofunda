# Banco-de-Dados-Aprofunda

# API de Alunos e Cursos

API REST simples para gerenciar alunos e cursos, usando Node.js, Express, TypeScript e MongoDB Atlas.

---

## Tecnologias usadas

- Node.js
- Express
- TypeScript
- MongoDB Atlas (via Mongoose)
- dotenv

---

## Funcionalidades

- Criar e listar cursos
- Criar e listar alunos vinculados a cursos
- Validação básica de existência de curso ao criar aluno

---

## Configuração e instalação

1. Clone este repositório:
   ```bash
   
2. Instale as dependências:
   ```bash
   npm install

3. Crie um arquivo .env na raiz com sua string de conexão do MongoDB Atlas:
   ```bash
    MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/<nomeDoBanco>?retryWrites=true&w=majority

4. Inicie o servidor em modo desenvolvimento:
   ```bash
    npm run dev

5. A API estará rodando em: http://localhost:3000
   

## Endpoints principais

### Cursos

- **POST** `/api/cursos` — Cria um novo curso  
  Body JSON:  
  {
    "nome": "Engenharia de Software",
    "codigo": "ENG123"
  }

- **GET** `/api/cursos` — Lista todos os cursos

---

### Alunos

- **POST** `/api/alunos` — Cria um novo aluno vinculado a um curso  
  Body JSON:  
  {
    "nome": "João Silva",
    "email": "joao@email.com",
    "curso": "<id_do_curso>"
  }

- **GET** `/api/alunos` — Lista todos os alunos com os dados do curso populados

---

## Testes

Você pode usar o Thunder Client, Postman ou Insomnia para testar as rotas acima.

---

## Observações

- Certifique-se de liberar o IP `0.0.0.0/0` na seção **Network Access** do MongoDB Atlas para permitir conexões de qualquer lugar (útil para desenvolvimento).  
- Configure o usuário e senha corretamente no MongoDB Atlas na seção **Database Access**.
