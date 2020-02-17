import express from 'express';
import routes from './routes';

import './database';

class App {
  // chamado automaricamente qndo iniciado a classe = constructor

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // aplicacao já pode receber requisicao em formato de json
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

// exportando uma nova instancia de app
export default new App().server;
