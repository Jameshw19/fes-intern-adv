import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Stripe | null;

const getStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(process.env.stripe_public_key);
  }
  return stripePromise;
};
export default getStripe;
