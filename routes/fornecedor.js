const express = require('express');
const router = express.Router();

let categorias = [];

router.get('/', (req, res) => {
    res.render('categorias/index', { categorias });
});

router.get('/nova', (req, res) => {
    res.render('categorias/form', { categoria: null });
});

router.post('/salvar', (req, res) => {
    const { id, nome } = req.body;

    if (id) {
        const index = categorias.findIndex(c => c.id == id);
        categorias[index] = { id, nome };
    } else {
        categorias.push({ id: Date.now(), nome });
    }

    res.redirect('/categorias');
});

router.get('/editar/:id', (req, res) => {
    const categoria = categorias.find(c => c.id == req.params.id);
    res.render('categorias/form', { categoria });
});

module.exports = router;