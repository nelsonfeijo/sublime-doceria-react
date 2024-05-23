const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Configurações do servidor
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectando ao MongoDB
mongoose.connect('mongodb://localhost:27017/sublime-doceria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

// Esquema e modelo do carrinho
const cartSchema = new mongoose.Schema({
    userId: String,
    items: [
        {
            id: String,
            title: String,
            description: String,
            price: String,
            image: String
        }
    ]
});

const Cart = mongoose.model('Cart', cartSchema);

// Rotas
app.get('/cart/:userId', async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        if (cart) {
            res.json(cart);
        } else {
            res.status(404).json({ message: 'Carrinho não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao buscar o carrinho:', error);
        res.status(500).json({ message: 'Erro ao buscar o carrinho', error: error.message });
    }
});

app.post('/cart', async (req, res) => {
    const { userId, item } = req.body;
    try {
        let cart = await Cart.findOne({ userId });
        if (cart) {
            cart.items.push(item);
        } else {
            cart = new Cart({ userId, items: [item] });
        }
        await cart.save();
        res.json(cart);
    } catch (error) {
        console.error('Erro ao adicionar item ao carrinho:', error);
        res.status(500).json({ message: 'Erro ao adicionar item ao carrinho', error: error.message });
    }
});

app.delete('/cart/:userId/:itemId', async (req, res) => {
    const { userId, itemId } = req.params;
    try {
        let cart = await Cart.findOne({ userId });
        if (cart) {
            cart.items = cart.items.filter(item => item.id !== itemId);
            await cart.save();
            res.json(cart);
        } else {
            res.status(404).json({ message: 'Carrinho não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao remover item do carrinho:', error);
        res.status(500).json({ message: 'Erro ao remover item do carrinho', error: error.message });
    }
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
