const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

const categoriasRoutes = require('./routes/categorias');
const fornecedorRoutes = require('./routes/fornecedor');
const clienteRoutes = require('./routes/cliente');

app.use('/categorias', categoriasRoutes);
app.use('/fornecedor', fornecedorRoutes);
app.use('/cliente', clienteRoutes);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/integrantes', (req, res) => {
    res.render('integrantes');
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

