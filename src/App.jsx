import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LazyMotion, domMax } from "framer-motion";
import { router } from "./routes";

function App() {
  return (
    <HelmetProvider>
      <LazyMotion features={domMax}>
        <RouterProvider router={router} />
      </LazyMotion>
    </HelmetProvider>
  );
}

export default App;
