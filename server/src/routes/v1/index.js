import { Router } from 'express';
import accountRouter from './accountRoutes.js';

const v1 = new Router();

// path /v1/account/
v1.use('/account', accountRouter);

export default v1;