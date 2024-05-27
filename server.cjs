import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 27017;

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/sublime-doceria', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

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

app.use(cors());
app.use(express.json());

// Rota para obter o carrinho por userId
app.get('/cart/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (cart) {
      res.json(cart);
    } else {
      res.status(404).json({ message: 'Carrinho não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o carrinho' });
  }
});

// Rota para atualizar o carrinho
app.post('/cart/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { items } = req.body;
    let cart = await Cart.findOne({ userId });
    if (cart) {
      cart.items = items;
    } else {
      cart = new Cart({ userId, items });
    }
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar o carrinho' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
