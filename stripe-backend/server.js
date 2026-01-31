import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import stripeRoutes from './routes/stripe.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/stripe', stripeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Stripe backend running on port ${PORT}`);
});
