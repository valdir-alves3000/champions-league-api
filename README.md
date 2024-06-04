# Champions League API

Este projeto é uma API construída em Express.js para gerenciar dados relacionados a jogadores e clubes participantes da Liga dos Campeões da UEFA.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Players](#players)
  - [Clubs](#clubs)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/valdir-alves3000/champions-league-api.git
   cd champions-league-api
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Create a `.env` file for environment variables**

   ```sh
   touch .env
   ```

   Add any necessary environment variables to this file.

## Usage

### Development

Para iniciar o servidor em modo de desenvolvimento com hot reloading:

```sh
npm run start:dev
```

### Production

Para construir e iniciar o servidor para produção:

```sh
npm run start:dist
```

## API Endpoints

### Players

- **Get all players**

  ```sh
  GET /players
  ```

- **Get player by ID**

  ```sh
  GET /players/:id
  ```

- **Add a new player**

  ```sh
  POST /players
  ```

- **Delete player by ID**

  ```sh
  DELETE /players/:id
  ```

- **Update player statistics by ID**

  ```sh
  PATCH /players/:id
  ```

### Clubs

- **Get all clubs**

  ```sh
  GET /clubs
  ```

- **Get club by name**

  ```sh
  GET /clubs/:name
  ```

## Project Structure

```plaintext
champions-league-api/
│
├── src/
│   ├── controllers/
│   │   ├── clubs-controller.ts
│   │   └── players-controller.ts
│   ├── data/
│   │   ├── players.json
│   │   └── clubs.json
│   ├── models/
│   │   ├── clubs-model.ts
│   │   └── player-model.ts
│   ├── routes/
│   │   └── index.ts
│   ├── services/
│   │   ├── clubs-service.ts
│   │   └── players-service.ts
│   └── server.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-foo`)
3. Commit your changes (`git commit -am 'Add foo feature'`)
4. Push to the branch (`git push origin feature-foo`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.

---
