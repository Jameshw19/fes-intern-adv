import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import getStripe from "./initializeStripe";

export async function createCheckoutSession(uid: string, priceId: string) {
  console.log(priceId);
  const firestore = getFirestore();

  const checkoutSessionRef = await addDoc(
    collection(firestore, `users/${uid}/checkout_sessions`),
    {
      price: "price_1N1VuqLXOr0D0CNbCMpNCdGv",
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    }
  );
  onSnapshot(checkoutSessionRef, async (snap) => {
    try {
      const { sessionId } = snap.data();
      if (sessionId) {
        const stripe = await getStripe();
        stripe.redirectToCheckout({ sessionId });
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  });
}
