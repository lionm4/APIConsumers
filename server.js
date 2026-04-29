const express = require("express");
const app = express();
exports.app = app;

app.use(express.json());

// Rota para buscar endereço por CEP
app.get('/endereco/:cep', async (req, res) => {
    const cep = req.params.cep;

    // Validação básica: CEP deve ter 8 dígitos
    if (cep.length !== 8 || isNaN(cep)) {
        return res.status(400).json({ erro: 'CEP inválido. Deve conter 8 dígitos numéricos.' });
    }

    try {
        // Consulta o Webservice ViaCEP
        const response = await axios.get(`https://viacep.com.br{cep}/json/`);
        
        if (response.data.erro) {
            return res.status(404).json({ erro: 'CEP não encontrado.' });
        }

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao consultar o CEP.' });
    }
});

// Iniciar Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
