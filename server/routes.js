import mainRouter from './api/router';

export default function routes(app) {
  app.use('/api/v1', mainRouter);
}
