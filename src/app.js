const express=require('express');
const path = require('path');
const app = express();
const ejs = require ('ejs');

/* config template ejs*/
app.set('view engine', 'ejs');
app.set ('views', path.resolve(__dirname, 'views'));



/*Config express */
app.use(express.static(path.resolve(__dirname,"../public"))); // para que la carpeta public se disponibilice

/* Routes */
const usersRouter = require('./routes/users');
const cartsRouter = require('./routes/carts');
const productsRouter = require('./routes/products');
const mainRouter = require('./routes/main');

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/carts', cartsRouter);
app.use('/products', productsRouter);

/*el error*/

app.use(function(req, res, next) {
    res.status(404).render('not-found')
});



app.listen(3000,()=>console.log("server corriendo en el puerto 3000"));
