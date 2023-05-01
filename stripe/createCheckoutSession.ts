import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import getStripe from "./initializeStripe";

export async function createCheckoutSession(uid: string, priceId: string) {
  console.log(uid);
  const firestore = getFirestore();

  const checkoutSessionRef = await addDoc(
    collection(firestore, `users/${uid}/checkout_sessions`),
    {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    }
  );

  onSnapshot(checkoutSessionRef, async (snap) => {
    const { sessionId } = snap.data();
    if (sessionId) {
      const stripe = await getStripe();
      stripe.redirectToCheckout({ sessionId });
    }
  });
}

// price_1N0QPuLXOr0D0CNbFAYklmsF yearly
