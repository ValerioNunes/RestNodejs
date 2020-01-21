const express = require('express');
const routes = express.Router();
const userController = require ('./controllers/userController');

routes.get('/',userController.listAll);

routes.post('/',userController.store);

routes.post('/:id',userController.listById);

routes.post('/:name',userController.store);

module.exports = routes;