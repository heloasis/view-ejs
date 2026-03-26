const express = require('express');
const router = express.Router();

let clientes = [];

// LISTAR
router.get('/', (req, res) => {
    res.render('cliente/index', { clientes });
});

// NOVO
router.get('/novo', (req, res) => {
    res.render('cliente/form', { cliente: null });
});

// SALVAR
router.post('/salvar', (req, res) => {
    const { id, nome, cpf } = req.body;

    if (id) {
        // EDITAR
        const index = clientes.findIndex(c => c.id == id);
        clientes[index] = { id, nome, cpf };
    } else {
        // NOVO
        clientes.push({
            id: Date.now(),
            nome,
            cpf
        });
    }

    res.redirect('/cliente');
});

// EDITAR
router.get('/editar/:id', (req, res) => {
    const cliente = clientes.find(c => c.id == req.params.id);
    res.render('cliente/form', { cliente });
});

module.exports = router;