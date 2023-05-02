import "@/styles/globals.css";
import "@mui/base";
import "@mui/icons-material";
import "@mui/material";

import { AuthContextProvider } from "../Components/context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
