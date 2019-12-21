require('dotenv').config();
const express = require ('express');
      app = express();
      massive = require ('massive');
      ctrl = require ('./controller');
const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());
app.use(express.static(`${__dirname}/../public/frontend`))

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/inventory', ctrl.addProduct)
app.put('/api/inventory:id', ctrl.updateProduct)
app.delete('/api/inventory:id', ctrl.deleteProduct)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`Server listening on port: ${SERVER_PORT}`)});
})