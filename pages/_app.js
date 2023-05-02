import "@/styles/globals.css";
import { AuthContextProvider } from "../Components/context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
