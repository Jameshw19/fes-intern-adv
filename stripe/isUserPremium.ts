import { getAuth, Auth, getIdToken, getIdTokenResult } from "firebase/auth";
import { app } from "../firebase";

const auth: Auth = getAuth(app);

export default async function isUserPremium(): Promise<boolean> {
  await getIdToken(auth.currentUser);
  const decodedToken = await getIdTokenResult(auth.currentUser);

  return decodedToken?.claims?.stripRole ? true : false;
}
