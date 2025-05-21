import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SK);

export const handleCreateCheckout = async (req, res) => {
  try {
    const { title, description, price, sellerStripeAccountId } = req.body;

    if (!title || !price || !sellerStripeAccountId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: { name: title, description },
          unit_amount: Math.round(price * 100),
        },
        quantity: 1,
      }],
      payment_intent_data: {
        application_fee_amount: 100, // optional platform fee
        transfer_data: {
          destination: sellerStripeAccountId, // ← Pay the seller
        },
      },
      success_url: `${process.env.DOMAIN}/success.html`,
      cancel_url: `${process.env.DOMAIN}/cancel.html`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error.message);
    res.status(500).json({ error: 'Stripe session creation failed' });
  }
};
