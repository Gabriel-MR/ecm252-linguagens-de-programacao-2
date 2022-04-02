/**
 npm run SCRIPT (apontado para o package.json)
 */

const express = require('express');
const {v4: uuidv4} = require('uuid')
const app = express();
app.use(express.json());

const observacoesPorLembreteId = {

}

//POST - end point
//host:porta/lembretes/123456/observacoes
app.post('/lembretes/:id/observacoes', (req, res) => {
    const idOb = uuidv4()
    // const texto = req.body.texto //só podemos usar o req.body porque declaramos na linha 8
    const {texto} = req.body
    const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || [] // poderia ser feito com um if
    observacoesDoLembrete.push({id: idOb, texto: texto})
    observacoesPorLembreteId[req.params.id] = observacoesDoLembrete
})

//GET - request
app.get('/lembretes/:id/observacoes', (req, res) => {

})

app.listen(4000, () => {
    console.log('Lembretes. Porta 4000.')
})