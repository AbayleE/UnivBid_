import express from 'express';
import { handleCreateCheckout } from '../controllers/stripe_controller.js';

const router = express.Router();
router.post('/create-checkout-session', handleCreateCheckout);
export default router;

