const express = require('express');
const router = express.Router();

function calcularFatorial(num) {
    if (num < 0) return 'Valor inválido. número deve ser postivo ou nulo.';
    if (num === 0 || num === 1) return 1;
    let fatorial = 1;
    for (let i = 2; i <= num; i++) {
        fatorial *= i;
    }
    return fatorial;
}

router.get('/', (req, res) => {
    const valor = parseInt(req.query.valor); 
    if (isNaN(valor)) {
        return res.status(400).send('forneça um número válido na linha .');
    }
    
    const resultado = calcularFatorial(valor);
    res.json({ valor, fatorial: resultado });
});

module.exports = router;
