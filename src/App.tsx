import "./App.css";
import { Toaster } from "./components/ui/sonner";
import RoutesHandler from "./RoutesHandler";

function App() {
  return (
    <>
      <RoutesHandler />
      <Toaster richColors />
    </>
  );
}

export default App;
