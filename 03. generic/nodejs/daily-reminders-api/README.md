# Daily Reminders API

This is a simple API for a "daily reminders" app. The app is built with Node.js, TypeScript, and Express. The data source is a local JSON file.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can download them from [here](https://nodejs.org/en/download/).

### Installing

First, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/daily-reminders-api.git
```

Navigate to the project directory:

```bash
cd daily-reminders-api
```

Install the dependencies:

```bash
npm install
```

Compile the TypeScript files:

```bash
npm run build
```

Start the server:

```bash
npm start
```

The server will start on `localhost:3000`.

## API Endpoints

The API has the following endpoints:

- `GET /reminders`: Get all reminders
- `GET /reminders/:id`: Get a reminder by id
- `POST /reminders`: Create a new reminder
- `PUT /reminders/:id`: Update a reminder by id
- `DELETE /reminders/:id`: Delete a reminder by id

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Express](https://expressjs.com/) - Web application framework

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.